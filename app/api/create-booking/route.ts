import { NextRequest, NextResponse } from 'next/server';
import { checkSlotAvailability, createBooking } from '@/lib/googleCalendar';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import { sendBookingEmail } from '@/lib/sendEmail';

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
      notes = "",
    } = body;

    // Validate required fields
    if (!date || !time || !firstName || !lastName || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check calendar availability
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

    // Create event
    const { eventId } = await createBooking(
      { date, time, duration: 60 },
      { firstName, lastName, email, phone, service, notes }
    );

    // Save to Firestore
    const bookingData = {
      eventId,
      date,
      time,
      service,
      firstName,
      lastName,
      email,
      phone,
      notes,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "bookingSlots"), bookingData);

    // -----------------------------
    // 📧 SEND EMAIL USING EMAILJS
    // -----------------------------
    const emailSuccess = await sendBookingEmail({
      firstName,
      lastName,
      email,
      phone: phone || "",
      service,
      date,
      time,
      notes: notes || "",
    });

    if (!emailSuccess) {
      console.warn("Booking created, but email failed to send.");
    }

    return NextResponse.json({
      success: true,
      bookingId: docRef.id,
      eventId,
      emailSent: emailSuccess,
    });

  } catch (error: any) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create booking" },
      { status: 500 }
    );
  }
}
