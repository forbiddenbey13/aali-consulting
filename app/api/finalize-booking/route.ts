import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/firebase";
import {
  collection, doc, runTransaction, serverTimestamp,
} from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});
export async function POST(req: Request) {
  try {
    const { paymentIntentId, slotId, booking } = (await req.json()) as {
      paymentIntentId: string;
      slotId: string;
      booking: {
        service: string; date: string; time: string; timezone?: string;
        firstName: string; lastName: string; email: string; phone?: string;
      };
    };

    if (!paymentIntentId || !slotId || !booking) {
      return NextResponse.json({ error: "Missing payload" }, { status: 400 });
    }

    // 1) Verify the payment really succeeded
    const pi = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (pi.status !== "succeeded") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }
    if (pi.amount !== 3000 || pi.currency.toLowerCase() !== "cad") {
      return NextResponse.json({ error: "Invalid payment amount/currency" }, { status: 400 });
    }

    const slotRef = doc(db, "bookingSlots", slotId);
    const bookingRef = doc(collection(db, "bookings"));

    // 2) Atomically write the booking only if the slot is still free
    let slotTaken = false;
    await runTransaction(db, async (tx) => {
      const slotSnap = await tx.get(slotRef);
      if (slotSnap.exists()) {
        slotTaken = true;
        return;
      }
      tx.set(slotRef, {
        date: booking.date,
        time: booking.time,
        service: booking.service,
        status: "confirmed",
        createdAt: serverTimestamp(),
        bookingRef: bookingRef.path,
      });
      tx.set(bookingRef, {
        ...booking,
        datetime: `${booking.date}T${booking.time}`,
        amount: 3000,
        currency: "cad",
        status: "paid",
        paidAt: serverTimestamp(),
        paymentIntentId,
        slotId,
      });
    });

    if (slotTaken) {
      // 3) Slot was taken between pay & finalize → refund
      try {
        await stripe.refunds.create({ payment_intent: paymentIntentId });
      } catch (e) {
        console.error("Refund failed:", e);
      }
      return NextResponse.json({ error: "Slot just got booked by someone else. We refunded your payment." }, { status: 409 });
    }

    return NextResponse.json({ ok: true, bookingId: bookingRef.id });
  } catch (err) {
    console.error("finalize-booking error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
