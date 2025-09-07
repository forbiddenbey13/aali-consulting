// app/api/cancel-reservation/route.ts
import { NextResponse } from "next/server";
import { db } from "@/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { slotId, bookingId } = await req.json();
    if (!slotId || !bookingId) {
      return NextResponse.json({ error: "Missing ids" }, { status: 400 });
    }
    await deleteDoc(doc(db, "bookingSlots", slotId));
    await deleteDoc(doc(db, "bookings", bookingId));
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("cancel-reservation error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
