import { NextRequest, NextResponse } from "next/server";
import { checkSlotAvailability, createBooking } from "@/lib/googleCalendar";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

import {
  sendBookingEmailToBusiness,
  sendBookingEmailToClient,
} from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      date = "",
      time = "",
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      service = "",
      platform = "",
      notes = "",
      whoAreYou = "",
      companyName = "",
    } = body;

    // -----------------------------
    // VALIDATION
    // -----------------------------
    if (!date || !time || !firstName || !lastName || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // -----------------------------
    // CHECK CALENDAR SLOT
    // -----------------------------
    const isAvailable = await checkSlotAvailability({
      date,
      time,
      duration: 60,
    });

    if (!isAvailable) {
      return NextResponse.json(
        { error: "This time slot is no longer available" },
        { status: 409 }
      );
    }

    // -----------------------------
    // CREATE GOOGLE CALENDAR EVENT
    // -----------------------------
    const { eventId } = await createBooking(
      { date, time, duration: 60 },
      { firstName, lastName, email, phone, service, platform, notes, whoAreYou, companyName }
    );

    // -----------------------------
    // SAVE TO FIRESTORE
    // -----------------------------
    const bookingData = {
      eventId,
      date,
      time,
      service,
      platform,
      firstName,
      lastName,
      email,
      phone,
      notes,
      whoAreYou,
      companyName,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "bookingSlots"), bookingData);

    // -----------------------------
    // EMAIL TEMPLATE PARAMETERS
    // -----------------------------
    const templateParams = {
      firstName: firstName || "",
      lastName: lastName || "",
      service: service || "",
      date: date || "",
      time: time || "",
      platform: platform || "",
      notes: notes || "",
      whoAreYou: whoAreYou || "",
      companyName: companyName || "",
      email: email || "", // shows in template
      phone: phone || "",
      clientEmail: email || "", // used only for sending
    };

    // -----------------------------
    // SEND EMAILS
    // -----------------------------
    const businessEmailSent = await sendBookingEmailToBusiness(templateParams);
    const clientEmailSent = await sendBookingEmailToClient(templateParams);

    return NextResponse.json({
      success: true,
      bookingId: docRef.id,
      eventId,
      businessEmailSent,
      clientEmailSent,
    });
  } catch (error: any) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create booking" },
      { status: 500 }
    );
  }
}
