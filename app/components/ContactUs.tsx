"use client";
import React, { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact-us.css";

import { db } from "@/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// ---------- Stripe Price Config ----------
const PRICE_CENTS = 100; // $1.00 CAD (adjust as needed)
const CURRENCY = "cad";
const PRICE_TEXT = `$${(PRICE_CENTS / 100).toFixed(0)} CAD`;

// Publishable key
const pk =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
const stripePromise = typeof window !== "undefined" && pk ? loadStripe(pk) : null;

/** ---------- Types ---------- */
type Step = 1 | 2 | 3;
type FormData = {
  service: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

/** ---------- Config ---------- */
const SERVICES = [
  "Personal tax",
  "Corporate tax",
  "Strategic Financial Planning",
  "Accounting",
  "Bookkeeping",
  "System Implementation",
];

const START_HOUR = 9,
  END_HOUR = 17,
  STEP_MIN = 120,
  DAYS_TO_SHOW = 30;

const pad = (n: number) => String(n).padStart(2, "0");
const slots = Array.from(
  { length: ((END_HOUR - START_HOUR) * 60) / STEP_MIN + 1 },
  (_, i) => {
    const h = START_HOUR + Math.floor((i * STEP_MIN) / 60);
    const m = (i * STEP_MIN) % 60;
    return `${pad(h)}:${pad(m)}`;
  }
);

type DayItem = { iso: string; labelTop: string; labelBottom: string };
const dayItems = (n: number) =>
  Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + i);
    return {
      iso: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
      labelTop: d.toLocaleDateString(undefined, { weekday: "short" }),
      labelBottom: pad(d.getDate()),
    } as DayItem;
  });

const useVisibleDayCount = () => {
  const [c, setC] = useState(5);
  useEffect(() => {
    const f = () => {
      const w = window.innerWidth;
      setC(w >= 1280 ? 6 : w >= 768 ? 5 : 4);
    };
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return c;
};

const BookingFlowEmail: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [sending, setSending] = useState(false);
  const [data, setData] = useState<FormData>({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // ✅ Initialize EmailJS once (so sending works later)
  useEffect(() => {
    const pk = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (pk) {
      try {
        emailjs.init({ publicKey: pk });
      } catch (e) {
        console.error("EmailJS init failed:", e);
      }
    }
  }, []);

  const days = useMemo(() => dayItems(DAYS_TO_SHOW), []);
  const todayStr = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }, []);
  useEffect(() => {
    if (step === 2 && !data.date) setData((d) => ({ ...d, date: todayStr }));
  }, [step, todayStr, data.date]);

  // ---- Listen to confirmed slots ----
  const visCount = useVisibleDayCount();
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, days.length - visCount);
  const visibleDateIsos = useMemo(
    () => days.slice(start, start + visCount).map((d) => d.iso),
    [days, start, visCount]
  );
  const [bookedByDate, setBookedByDate] = useState<
    Record<string, Set<string>>
  >({});
  useEffect(() => {
    if (!visibleDateIsos.length) return;
    const qy = query(
      collection(db, "bookingSlots"),
      where("date", "in", visibleDateIsos),
      where("status", "==", "confirmed")
    );
    const unsub = onSnapshot(qy, (snap) => {
      const map: Record<string, Set<string>> = {};
      visibleDateIsos.forEach((iso) => (map[iso] = new Set()));
      snap.forEach((docSnap) => {
        const d = docSnap.data() as any;
        if (d?.date && d?.time) (map[d.date] ??= new Set()).add(d.time);
      });
      setBookedByDate(map);
    });
    return unsub;
  }, [visibleDateIsos]);

  const bookedTimes = bookedByDate[data.date] ?? new Set<string>();

  const nextFrom1 = () => {
    const e: typeof errors = {};
    if (!data.service) e.service = "Please select a service.";
    setErrors(e);
    if (!Object.keys(e).length) setStep(2);
  };

  const nextFrom2 = () => {
    const e: typeof errors = {};
    if (!data.date) e.date = "Select a date.";
    if (!data.time) e.time = "Select a time.";
    else if (!slots.includes(data.time))
      e.time = "Pick a time between 9 AM and 5 PM (EST).";
    if (data.date && data.time) {
      const c = new Date(`${data.date}T${data.time}`);
      if (c < new Date()) e.time = "Please choose a future time.";
      if (bookedTimes.has(data.time)) e.time = "That time is already confirmed.";
    }
    setErrors(e);
    if (!Object.keys(e).length) setStep(3);
  };

  // ---- Payment Intent creation ----
  const beginPayment = async () => {
    const e2: typeof errors = {};
    if (!data.firstName.trim()) e2.firstName = "First name is required.";
    if (!data.lastName.trim()) e2.lastName = "Last name is required.";
    if (!data.email.trim()) e2.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e2.email = "Enter a valid email.";
    setErrors(e2);
    if (Object.keys(e2).length) return;

    if (!pk) {
      alert("Stripe publishable key missing.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          timezone: "EST",
          priceCents: PRICE_CENTS,
          currency: CURRENCY,
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) {
        alert(j.error || "Unable to start payment.");
        return;
      }
      setClientSecret(j.clientSecret);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="cf-bg">
      <div className="cf-wrap">
        <h1 className="cf-title">Book Your Consultation</h1>
        <p className="cf-subtitle">
          Each meeting is <strong>{PRICE_TEXT}</strong>. All times in{" "}
          <strong>EST</strong>.
        </p>

        <div className="steps">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1. Service</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2. Time</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>
            3. Details & Payment
          </div>
        </div>

        {step === 1 && (
          <div className="svc-list">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                className={`svc-card ${data.service === s ? "selected" : ""}`}
                onClick={() => setData((d) => ({ ...d, service: s }))}
              >
                <div className="svc-title">{s}</div>
                <div className="svc-minutes">1 hour</div>
              </button>
            ))}
            {errors.service && <p className="cf-error">{errors.service}</p>}
            <div className="steps-nav">
              <button
                className="cf-btn"
                onClick={nextFrom1}
                disabled={!data.service}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="slot-section slot-section--stacked">
            {/* ===== Date chooser ===== */}
            <div className="date-grid-wrap">
              <label className="slot-label">Choose a date</label>

              <div className="date-grid-controls">
                <button
                  type="button"
                  className={`date-nav-btn ${start === 0 ? "disabled" : ""}`}
                  onClick={() => setStart((s) => Math.max(0, s - visCount))}
                  disabled={start === 0}
                  aria-label="Previous dates"
                >
                  ‹
                </button>

                <div className="date-grid" role="tablist" aria-label="Pick a date">
                  {days.slice(start, start + visCount).map((d) => {
                    const selected =
                      data.date === d.iso || (!data.date && d.iso === todayStr);
                    const full = (bookedByDate[d.iso]?.size ?? 0) >= slots.length;

                    return (
                      <button
                        key={d.iso}
                        type="button"
                        className={`date-pill ${selected ? "selected" : ""} ${
                          full ? "full" : ""
                        }`}
                        onClick={() =>
                          !full && setData((p) => ({ ...p, date: d.iso, time: "" }))
                        }
                        aria-selected={selected}
                        aria-disabled={full}
                        role="tab"
                      >
                        <span className="date-pill-top">{d.labelTop}</span>
                        <span className="date-pill-bottom">{d.labelBottom}</span>
                        {full && <span aria-hidden="true"> (Full)</span>}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className={`date-nav-btn ${start >= maxStart ? "disabled" : ""}`}
                  onClick={() => setStart((s) => Math.min(maxStart, s + visCount))}
                  disabled={start >= maxStart}
                  aria-label="Next dates"
                >
                  ›
                </button>
              </div>

              {errors.date && <p className="cf-error">{errors.date}</p>}
            </div>

            {/* ===== Time chooser ===== */}
            <div className="slot-times">
              <label className="slot-label">Choose a time (EST)</label>

              <div className="time-grid">
                {slots.map((t) => {
                  const isTodaySel = data.date === todayStr;
                  const now = new Date();
                  const pastDisabled =
                    isTodaySel &&
                    (() => {
                      const [H, M] = t.split(":").map(Number);
                      const cmp = new Date();
                      cmp.setHours(H, M, 0, 0);
                      return cmp < now;
                    })();
                  const taken = bookedByDate[data.date]?.has(t) ?? false;
                  const disabled = pastDisabled || taken || !data.date;
                  const selected = data.time === t;

                  const [H, M] = t.split(":").map(Number);
                  const h12 = ((H + 11) % 12) + 1;
                  const ampm = H < 12 ? "AM" : "PM";
                  const label = `${pad(h12)}:${pad(M)} ${ampm}`;

                  return (
                    <button
                      key={t}
                      type="button"
                      className={`slot-btn ${selected ? "selected" : ""} ${
                        disabled ? "disabled" : ""
                      } ${taken ? "booked" : ""}`}
                      disabled={disabled}
                      onClick={() => !disabled && setData((d) => ({ ...d, time: t }))}
                      aria-pressed={selected}
                    >
                      {label}
                      {taken ? " (Booked)" : ""}
                    </button>
                  );
                })}
              </div>

              {errors.time && <p className="cf-error">{errors.time}</p>}

              <div className="steps-nav">
                <button
                  className="cf-btn cf-btn-secondary"
                  onClick={() => setStep(1)}
                  type="button"
                >
                  Back
                </button>
                <button
                  className="cf-btn"
                  onClick={nextFrom2}
                  type="button"
                  disabled={!data.date || !data.time}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="cf-form" role="form" aria-label="Details and payment">
            <div>
              <input
                className="cf-input"
                type="text"
                placeholder="First name"
                value={data.firstName}
                onChange={(e) =>
                  setData((d) => ({ ...d, firstName: e.target.value }))
                }
              />
              {errors.firstName && <p className="cf-error">{errors.firstName}</p>}
            </div>
            <div>
              <input
                className="cf-input"
                type="text"
                placeholder="Last name"
                value={data.lastName}
                onChange={(e) =>
                  setData((d) => ({ ...d, lastName: e.target.value }))
                }
              />
              {errors.lastName && <p className="cf-error">{errors.lastName}</p>}
            </div>
            <div>
              <input
                className="cf-input"
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
              />
              {errors.email && <p className="cf-error">{errors.email}</p>}
            </div>
            <div>
              <textarea
                className="cf-input cf-notes"
                placeholder="Additional Notes (Optional)"
                rows={4}
                value={data.notes}
                onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))}
              />
            </div>

            {!clientSecret ? (
              <div className="steps-nav">
                <button
                  className="cf-btn cf-btn-secondary"
                  onClick={() => setStep(2)}
                  type="button"
                >
                  Back
                </button>
                <button
                  className="cf-btn"
                  onClick={beginPayment}
                  disabled={sending || !pk}
                >
                  {sending ? "Preparing..." : `Pay ${PRICE_TEXT}`}
                </button>
              </div>
            ) : stripePromise ? (
              <Elements
                stripe={stripePromise}
                options={{ clientSecret }}
                key={clientSecret}
              >
                <CheckoutForm data={data} />
              </Elements>
            ) : (
              <p className="cf-error">Stripe could not be initialized.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingFlowEmail;

/** ---------------- Payment subcomponent ---------------- */
function CheckoutForm(props: { data: FormData }) {
  const { data } = props;
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null); // non-blocking info (e.g., email failed)

  const sendEmail = async () => {
    const ejService = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const ejTemplate = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const ejPublic = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const params = {
      service: data.service,
      date: data.date,
      time: data.time,
      datetime: `${data.date}T${data.time}`,
      timezone: "EST",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      notes: data.notes,
    };

    // If init in parent failed, passing publicKey here is a safe fallback.
    await emailjs.send(ejService, ejTemplate, params, { publicKey: ejPublic });
  };

  const finalizeBooking = async (paymentIntentId: string) => {
    const resp = await fetch("/api/finalize-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentIntentId,
        slotId: `${data.date}T${data.time}`,
        booking: {
          service: data.service,
          date: data.date,
          time: data.time,
          timezone: "EST",
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          notes: data.notes,
        },
      }),
    });
    const j = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      throw new Error(j.error || "Could not finalize booking in the database.");
    }
    return j as { ok: boolean; bookingId?: string };
  };

  const pay = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrMsg(null);
    setInfoMsg(null);
    if (!stripe || !elements) return;
    setPaying(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (error) {
        setErrMsg(error.message || "Payment failed.");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        // 1) Save booking to DB
        try {
          await finalizeBooking(paymentIntent.id);
        } catch (dbErr: any) {
          // DB write failed — show a clear error
          setErrMsg(
            dbErr?.message ||
              "Payment captured, but we could not save your booking. Please contact support."
          );
          return; // stop here; we won't try to email if DB failed
        }

        // 2) Send email (best effort)
        try {
          await sendEmail();
        } catch (mailErr: any) {
          // Email failed — inform, but the booking is saved
          setInfoMsg(
            "Your booking is saved, but the confirmation email could not be sent. Please check spam or contact us."
          );
          console.error("Email send failed:", mailErr);
        }

        alert("Payment successful! Your booking is confirmed.");
      } else {
        setErrMsg("Payment not completed.");
      }
    } catch (err: unknown) {
      console.error(err);
      setErrMsg("Something went wrong while processing your payment.");
    } finally {
      setPaying(false);
    }
  };

  return (
    <form onSubmit={pay} className="stripe-form">
      <PaymentElement />
      {errMsg && (
        <p className="cf-error" role="alert" style={{ marginTop: 8 }}>
          {errMsg}
        </p>
      )}
      {infoMsg && (
        <p className="cf-hint" style={{ marginTop: 8 }}>
          {infoMsg}
        </p>
      )}
      <div className="steps-nav" style={{ marginTop: 16 }}>
        <button
          className="cf-btn cf-btn-secondary"
          type="button"
          onClick={() => history.back()}
          disabled={paying}
        >
          Back
        </button>
        <button
          className="cf-btn"
          type="submit"
          disabled={!stripe || !elements || paying}
        >
          {paying ? "Processing..." : `Pay ${PRICE_TEXT}`}
        </button>
      </div>
      <p className="cf-hint">
        Your card will be charged <strong>{PRICE_TEXT}</strong>.
      </p>
    </form>
  );
}
