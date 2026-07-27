import { NextRequest, NextResponse } from "next/server";
import { deleteDoc, doc, updateDoc, getDoc, collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/firebase";
// Updated import to point to outlookCalendar
import { deleteBookingEvent, updateBookingEvent, checkSlotAvailability } from "@/lib/outlookCalendar";
import { sendCancellationEmail, sendBookingEmailToClient, sendBookingEmailToBusiness } from "@/lib/sendEmail";

// DELETE: Remove a booking OR all bookings
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const bookingId = searchParams.get("bookingId");
        const eventId = searchParams.get("eventId");
        const silent = searchParams.get("silent") === "true";
        const deleteAll = searchParams.get("deleteAll") === "true";

        // 1. Handle "Delete All" (Clear PAST bookings only: date < today)
        if (deleteAll) {
            // Get today's date string in YYYY-MM-DD
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const day = String(today.getDate()).padStart(2, "0");
            const todayStr = `${year}-${month}-${day}`;

            // Query for docs where date < todayStr
            const q = query(collection(db, "bookingSlots"), where("date", "<", todayStr));
            const snapshot = await getDocs(q);
            const batchPromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
            await Promise.all(batchPromises);
            return NextResponse.json({ success: true, count: snapshot.size, message: `Deleted ${snapshot.size} past records.` });
        }

        // 2. Handle Single Delete
        if (!bookingId) {
            return NextResponse.json({ error: "Missing bookingId" }, { status: 400 });
        }

        const bookingRef = doc(db, "bookingSlots", bookingId);

        // If NOT silent, we need to handle Calendar and Email
        if (!silent) {
            if (!eventId) {
                return NextResponse.json({ error: "Missing eventId for non-silent delete" }, { status: 400 });
            }

            // Fetch info for email
            const bookingSnap = await getDoc(bookingRef);
            const bookingData = bookingSnap.exists() ? bookingSnap.data() : null;

            // Delete from Outlook Calendar
            try {
                await deleteBookingEvent(eventId);
            } catch (err) {
                console.error("Failed to delete Outlook event", err);
                // Continue to delete from DB even if Calendar fails
            }

            // Send Cancellation Email
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
        }

        // Always delete from Firestore
        await deleteDoc(bookingRef);

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

        // -----------------------------
        // DATE & TIME CALCULATION
        // -----------------------------
        const startDateTimeObj = new Date(`${date}T${time}:00`);
        const endDateTimeObj = new Date(startDateTimeObj.getTime() + 60 * 60 * 1000); // Add 60 minutes
        
        const startDateTime = startDateTimeObj.toISOString();
        const endDateTime = endDateTimeObj.toISOString();

        // 1. Check Availability (Using new start/end signature)
        const isAvailable = await checkSlotAvailability(startDateTime, endDateTime);
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

        // 3. Update Outlook Calendar
        await updateBookingEvent(eventId, { 
            start: startDateTime, 
            end: endDateTime, 
            platform 
        });

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