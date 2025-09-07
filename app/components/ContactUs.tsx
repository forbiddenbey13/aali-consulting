"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./contact-us.css";

/** ---------- Types ---------- */
type Step = 1 | 2 | 3;

type FormData = {
  service: string;
  date: string;    // YYYY-MM-DD
  time: string;    // HH:mm (24h)
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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

const START_HOUR = 9;   // 9 AM
const END_HOUR = 17;    // 5 PM inclusive
const STEP_MIN = 60;    // 60 = hourly. Change to 30 for half-hours.
const DAYS_TO_SHOW = 30; // total days we’ll paginate across

const pad = (n: number) => String(n).padStart(2, "0");

/** Build time slots: 09:00 .. 17:00 (inclusive) */
const buildSlots = () => {
  const out: string[] = [];
  for (let h = START_HOUR; h <= END_HOUR; h++) {
    for (let m = 0; m < 60; m += STEP_MIN) {
      if (h === END_HOUR && m > 0) break;
      out.push(`${pad(h)}:${pad(m)}`);
    }
  }
  return out;
};
const ALL_SLOTS = buildSlots();

/** Date strip helpers */
type DayItem = { iso: string; labelTop: string; labelBottom: string };

const fmtDayStrip = (d: Date): DayItem => {
  const iso = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const weekday = d.toLocaleDateString(undefined, { weekday: "short" }); // Mon, Tue…
  const dayNum = pad(d.getDate());
  return { iso, labelTop: weekday, labelBottom: dayNum };
};

const makeDayStrip = (n: number): DayItem[] => {
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  const out: DayItem[] = [];
  for (let i = 0; i < n; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    out.push(fmtDayStrip(d));
  }
  return out;
};

/** Visible-day-count hook (≈4 mobile, 5 md/lg, 6 xl) */
const useVisibleDayCount = () => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1280) setCount(6);
      else if (w >= 768) setCount(5);
      else setCount(4);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return count;
};

const BookingFlow: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const dayStrip = useMemo(() => makeDayStrip(DAYS_TO_SHOW), []);
  const todayStr = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }, []);

  // Default date to today on entering Step 2
  useEffect(() => {
    if (step === 2 && !data.date) setData((d) => ({ ...d, date: todayStr }));
  }, [step, data.date, todayStr]);

  const isSelectedDateToday = useMemo(() => {
    if (!data.date) return false;
    const now = new Date();
    const sel = new Date(data.date + "T00:00");
    return (
      sel.getFullYear() === now.getFullYear() &&
      sel.getMonth() === now.getMonth() &&
      sel.getDate() === now.getDate()
    );
  }, [data.date]);

  // Hide past slots if selected date is today
  const visibleSlots = useMemo(() => {
    if (!isSelectedDateToday) return ALL_SLOTS;
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes();
    return ALL_SLOTS.filter((t) => {
      const [H, M] = t.split(":").map(Number);
      if (H > hh) return true;
      if (H < hh) return false;
      return M >= mm;
    });
  }, [isSelectedDateToday]);

  /** ---- Step navigation ---- */
  const nextFromStep1 = () => {
    const errs: typeof errors = {};
    if (!data.service) errs.service = "Please select a service.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep(2);
  };

  const nextFromStep2 = () => {
    const errs: typeof errors = {};
    if (!data.date) errs.date = "Select a date.";
    if (!data.time) errs.time = "Select a time.";
    else if (!ALL_SLOTS.includes(data.time))
      errs.time = "Pick a time between 9 AM and 5 PM (EST).";
    if (data.date && data.time) {
      const chosen = new Date(`${data.date}T${data.time}`);
      if (chosen < new Date()) errs.time = "Please choose a future time.";
    }
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep(3);
  };

  const submitFromStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!data.firstName.trim()) errs.firstName = "First name is required.";
    if (!data.lastName.trim()) errs.lastName = "Last name is required.";
    if (!data.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = "Enter a valid email.";
    if (data.phone && !/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/.test(data.phone))
      errs.phone = "Enter a valid phone (e.g. 123-456-7890).";

    setErrors(errs);
    if (Object.keys(errs).length) return;

    const payload = { ...data, datetime: `${data.date}T${data.time}`, timezone: "EST" };
    console.log("Booking submitted:", payload);
    alert("Thanks! Your request has been sent.");
  };

  const back = () => setStep((s) => (s > 1 ? ((s - 1) as Step) : s));

  /** ---- Date pagination (show 4/5/6 at a time) ---- */
  const visCount = useVisibleDayCount();
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, dayStrip.length - visCount);
  const shownDays = dayStrip.slice(start, start + visCount);
  const canPrev = start > 0;
  const canNext = start < maxStart;

  const goPrev = () => setStart((s) => Math.max(0, s - visCount));
  const goNext = () => setStart((s) => Math.min(maxStart, s + visCount));

  // Keep selected date in view
  useEffect(() => {
    if (!data.date) return;
    const idx = dayStrip.findIndex((d) => d.iso === data.date);
    if (idx === -1) return;
    if (idx < start) setStart(idx);
    if (idx >= start + visCount) setStart(Math.min(idx, maxStart));
  }, [data.date, start, visCount, maxStart, dayStrip]);

  /** ---- Auto-center selected date when entering Step 2 ---- */
  const stripRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (step !== 2 || !stripRef.current || !data.date) return;
    const el = stripRef.current.querySelector<HTMLButtonElement>(
      `button[data-iso="${data.date}"]`
    );
    el?.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [step, data.date]);

  /** ---------- Render ---------- */
  return (
    <div className="cf-bg">
      <div className="cf-wrap">
        <h1 className="cf-title">Book Your Free Consultation</h1>
        <p className="cf-subtitle">
          Select a service, choose a time, then enter your details.
          All appointment times are in <strong>EST</strong>.
        </p>

        {/* Steps */}
        <div className="steps">
          <div className={`step ${step >= 1 ? "active" : ""}`}>1. Service</div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>2. Time</div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>3. Details</div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="svc-list">
            {SERVICES.map((s) => (
              <button
                key={s}
                type="button"
                className={`svc-card ${data.service === s ? "selected" : ""}`}
                onClick={() => setData((d) => ({ ...d, service: s }))}
                aria-pressed={data.service === s}
              >
                <div className="svc-title">{s}</div>
                <div className="svc-minutes">45 minutes</div>
              </button>
            ))}
            {errors.service && <p className="cf-error">{errors.service}</p>}

            <div className="steps-nav">
              <button className="cf-btn" onClick={nextFromStep1} disabled={!data.service}>
                Continue
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 (date above, times below) */}
        {step === 2 && (
          <div className="slot-section slot-section--stacked">
            {/* DATE ROW */}
            <div className="date-grid-wrap">
              <label className="slot-label">Choose a date</label>
              <div className="date-grid-controls" ref={stripRef}>
                <button
                  type="button"
                  className={`date-nav-btn ${!canPrev ? "disabled" : ""}`}
                  onClick={goPrev}
                  disabled={!canPrev}
                  aria-label="Previous dates"
                >
                  ‹
                </button>

                <div className="date-grid" role="tablist" aria-label="Pick a date">
                  {shownDays.map((d) => {
                    const selected = data.date === d.iso || (!data.date && d.iso === todayStr);
                    return (
                      <button
                        key={d.iso}
                        type="button"
                        data-iso={d.iso}
                        className={`date-pill ${selected ? "selected" : ""}`}
                        onClick={() => setData((prev) => ({ ...prev, date: d.iso }))}
                        role="tab"
                        aria-selected={selected}
                      >
                        <span className="date-pill-top">{d.labelTop}</span>
                        <span className="date-pill-bottom">{d.labelBottom}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className={`date-nav-btn ${!canNext ? "disabled" : ""}`}
                  onClick={goNext}
                  disabled={!canNext}
                  aria-label="More dates"
                >
                  ›
                </button>
              </div>
              {errors.date && <p className="cf-error">{errors.date}</p>}
            </div>

            {/* TIME GRID */}
            <div className="slot-times">
              <label className="slot-label">Choose a time (EST)</label>

              <div className="time-grid">
                {ALL_SLOTS.map((t) => {
                  const disabled = isSelectedDateToday && !visibleSlots.includes(t);
                  const selected = data.time === t;

                  const [H, M] = t.split(":").map(Number);
                  const hour12 = ((H + 11) % 12) + 1;
                  const ampm = H < 12 ? "AM" : "PM";
                  const label = `${pad(hour12)}:${pad(M)} ${ampm}`;

                  return (
                    <button
                      key={t}
                      type="button"
                      className={`slot-btn ${selected ? "selected" : ""} ${disabled ? "disabled" : ""}`}
                      onClick={() => !disabled && setData((d) => ({ ...d, time: t }))}
                      disabled={disabled}
                      aria-pressed={selected}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {errors.time && <p className="cf-error">{errors.time}</p>}
              <p className="cf-hint">All appointment times are in <strong>EST</strong>.</p>

              <div className="steps-nav">
                <button className="cf-btn cf-btn-secondary" onClick={back} type="button">
                  Back
                </button>
                <button
                  className="cf-btn"
                  onClick={nextFromStep2}
                  type="button"
                  disabled={!data.date || !data.time}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <form className="cf-form" onSubmit={submitFromStep3} noValidate>
            <div className="cf-row cf-row--two">
              <div>
                <input
                  className="cf-input"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={data.firstName}
                  onChange={(e) => setData((d) => ({ ...d, firstName: e.target.value }))}
                />
                {errors.firstName && <p className="cf-error">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  className="cf-input"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={data.lastName}
                  onChange={(e) => setData((d) => ({ ...d, lastName: e.target.value }))}
                />
                {errors.lastName && <p className="cf-error">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <input
                className="cf-input"
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
              />
              {errors.email && <p className="cf-error">{errors.email}</p>}
            </div>

            <div>
              <input
                className="cf-input"
                type="tel"
                name="phone"
                placeholder="(123)-456-7890"
                value={data.phone}
                onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
              />
              {errors.phone && <p className="cf-error">{errors.phone}</p>}
            </div>

            <div className="steps-nav">
              <button className="cf-btn cf-btn-secondary" onClick={back} type="button">
                Back
              </button>
              <button className="cf-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingFlow;
