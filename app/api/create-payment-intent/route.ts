

// app/api/create-payment-intent/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/firebase";
import {
  doc,
  collection,
  runTransaction,
  serverTimestamp,
  getDoc
} from "firebase/firestore";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { service, date, time, firstName, lastName, email, phone, timezone = "EST" } =
      body as {
        service: string; date: string; time: string;
        firstName: string; lastName: string; email: string; phone?: string; timezone?: string;
      };

    if (!service || !date || !time || !firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Optional soft check — not authoritative (race-safe check happens in finalize).
    const slotId = `${date}T${time}`;
    const slotDoc = await getDoc(doc(db, "bookingSlots", slotId));
    if (slotDoc.exists()) {
      return NextResponse.json({ error: "Slot already confirmed" }, { status: 409 });
    }

    const pi = await stripe.paymentIntents.create({
      amount: 3000,                  // $30.00 CAD
      currency: "cad",
      payment_method_types: ["card"],// Card only (no Klarna/Link/etc)
      receipt_email: email,
      metadata: {
        slotId,
        service, date, time,
        customer_name: `${firstName} ${lastName}`,
        customer_email: email,
        phone: phone ?? "",
        timezone,
      },
    });

    return NextResponse.json({
      clientSecret: pi.client_secret,
      paymentIntentId: pi.id,
      slotId,
    });
  } catch (err) {
    console.error("create-payment-intent error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
