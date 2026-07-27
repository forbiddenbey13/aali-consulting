import { NextRequest, NextResponse } from "next/server";
import { checkSlotAvailability, createBooking } from "@/lib/outlookCalendar";
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

    // 1. VALIDATION
    if (!date || !time || !firstName || !lastName || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. DATE & TIME CALCULATION (Updated to 30 Minutes)
    const startDateTimeObj = new Date(`${date}T${time}:00`);
    // 30 minutes * 60 seconds * 1000 milliseconds
    const endDateTimeObj = new Date(startDateTimeObj.getTime() + 30 * 60 * 1000); 
    
    const startDateTime = startDateTimeObj.toISOString();
    const endDateTime = endDateTimeObj.toISOString();

    // 3. CHECK OUTLOOK CALENDAR SLOT
    const isAvailable = await checkSlotAvailability(startDateTime, endDateTime);

    if (!isAvailable) {
      return NextResponse.json(
        { error: "This time slot is no longer available" },
        { status: 409 }
      );
    }

    // 4. CREATE OUTLOOK EVENT
    const createdEvent = await createBooking({
      title: `${service} - ${firstName} ${lastName}`,
      start: startDateTime,
      end: endDateTime,
      attendeeEmail: email,
      attendeeName: `${firstName} ${lastName}`
    });

    const eventId = createdEvent.id;

    // 5. EMAIL TEMPLATE PARAMETERS
    const templateParams = {
      firstName,
      lastName,
      service,
      date,
      time,
      platform,
      notes,
      whoAreYou,
      companyName,
      email, 
      phone,
      clientEmail: email, 
    };

    // 6. SEND CONFIRMATION EMAILS
    await sendBookingEmailToBusiness(templateParams);
    await sendBookingEmailToClient(templateParams);

    return NextResponse.json({
      success: true,
      eventId,
    });
    
  } catch (error: any) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create booking" },
      { status: 500 }
    );
  }
}