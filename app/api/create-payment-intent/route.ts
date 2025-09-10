// app/api/create-payment-intent/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil", // ✅ valid version
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      service,
      date,
      time,
      firstName,
      lastName,
      email,
      phone,
      timezone = "EST",
      // optional: let the UI send the amount in cents
      priceCents,
      currency = "cad",
    } = body as {
      service: string;
      date: string;
      time: string;
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      timezone?: string;
      priceCents?: number;
      currency?: string;
    };

    if (!service || !date || !time || !firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // If you keep your UI at $10, set default 1000; otherwise pass priceCents from the client.
    const amount = Number.isInteger(priceCents) ? priceCents! : 500; // 500 = $5.00 CAD
    if (!Number.isInteger(amount) || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }
    // Stripe minimums: for CAD must be >= 50 (i.e., $0.50)
    if (currency.toLowerCase() === "cad" && amount < 50) {
      return NextResponse.json({ error: "Minimum is 50 cents CAD" }, { status: 400 });
    }

    // Soft check: if slot exists as confirmed, block early
    const slotId = `${date}T${time}`;
    const slotDoc = await getDoc(doc(db, "bookingSlots", slotId));
    if (slotDoc.exists()) {
      return NextResponse.json({ error: "Slot already confirmed" }, { status: 409 });
    }

    const pi = await stripe.paymentIntents.create({
      amount,                // ✅ cents
      currency,              // "cad"
      payment_method_types: ["card"], // keep card-only to avoid Link/currency mismatches
      receipt_email: email,
      metadata: {
        slotId,
        service,
        date,
        time,
        customer_name: `${firstName} ${lastName}`,
        customer_email: email,
        phone: phone ?? "",
        timezone,
      },
      automatic_payment_methods: undefined, // ensure only 'card' is used
    });

    return NextResponse.json({
      clientSecret: pi.client_secret,
      paymentIntentId: pi.id,
      slotId,
    });
  } catch (err: any) {
    // See the real Stripe error (e.g., amount_too_small, invalid_currency)
    // eslint-disable-next-line no-console
    console.error("create-payment-intent error:", err?.raw || err);
    return NextResponse.json(
      { error: err?.raw?.message || "Server error" },
      { status: 500 }
    );
  }
}
