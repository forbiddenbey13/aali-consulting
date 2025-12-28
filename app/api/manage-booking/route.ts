import { NextRequest, NextResponse } from "next/server";
import { deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { deleteBookingEvent, updateBookingEvent, checkSlotAvailability } from "@/lib/googleCalendar";
import { sendCancellationEmail, sendBookingEmailToClient, sendBookingEmailToBusiness } from "@/lib/sendEmail";

// DELETE: Remove a booking
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const bookingId = searchParams.get("bookingId");
        const eventId = searchParams.get("eventId");

        if (!bookingId || !eventId) {
            return NextResponse.json({ error: "Missing bookingId or eventId" }, { status: 400 });
        }

        // 0. Fetch booking details for email (before deleting)
        const bookingRef = doc(db, "bookingSlots", bookingId);
        const bookingSnap = await getDoc(bookingRef);
        const bookingData = bookingSnap.exists() ? bookingSnap.data() : null;

        // 1. Delete from Google Calendar
        await deleteBookingEvent(eventId);

        // 2. Delete from Firestore
        await deleteDoc(bookingRef);

        // 3. Send Cancellation Email
        if (bookingData) {
            const templateParams = {
                firstName: bookingData.firstName,
                lastName: bookingData.lastName,
                email: bookingData.email,
                service: bookingData.service,
                date: bookingData.date,
                time: bookingData.time,
                clientEmail: bookingData.email,
            };
            await sendCancellationEmail(templateParams);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error deleting booking:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PATCH: Reschedule a booking
export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const { bookingId, eventId, date, time, platform } = body;

        if (!bookingId || !eventId || !date || !time) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // 1. Check Availability
        const isAvailable = await checkSlotAvailability({ date, time, duration: 60 });
        if (!isAvailable) {
            return NextResponse.json({ error: "Selected time slot is not available" }, { status: 409 });
        }

        // 2. Fetch original booking to get contact details
        const bookingRef = doc(db, "bookingSlots", bookingId);
        const bookingSnap = await getDoc(bookingRef);
        if (!bookingSnap.exists()) {
            return NextResponse.json({ error: "Booking not found" }, { status: 404 });
        }
        const originalData = bookingSnap.data();

        // 3. Update Google Calendar
        await updateBookingEvent(eventId, { date, time, duration: 60, platform });

        // 4. Update Firestore
        const updateData: any = {
            date,
            time,
            status: "rescheduled",
        };
        if (platform) updateData.platform = platform;
        await updateDoc(bookingRef, updateData);

        // 5. Send Reschedule Emails (using standard booking logic)
        const templateParams = {
            firstName: originalData.firstName,
            lastName: originalData.lastName,
            email: originalData.email,
            service: originalData.service,
            date: date, // NEW date
            time: time, // NEW time
            platform: platform || originalData.platform || "",
            notes: originalData.notes,
            whoAreYou: originalData.whoAreYou,
            companyName: originalData.companyName,
            phone: originalData.phone,
            clientEmail: originalData.email,
        };

        // Notify both parties of the change
        await sendBookingEmailToBusiness(templateParams);
        await sendBookingEmailToClient(templateParams);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error rescheduling booking:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
