import { NextRequest, NextResponse } from 'next/server';
import { getEventsForRange } from '@/lib/outlookCalendar'; // Updated import
import { DateTime } from 'luxon';

export async function POST(request: NextRequest) {
    try {
        const { date, timeSlots } = await request.json(); // date: "YYYY-MM-DD", timeSlots: ["09:00", "11:00", ...]

        if (!date || !timeSlots || !Array.isArray(timeSlots)) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        // 1. Get all events for this specific day in Toronto time
        const startOfDay = DateTime.fromISO(date, { zone: 'America/Toronto' }).startOf('day');
        const endOfDay = startOfDay.endOf('day');

        // Safety check just in case
        if (!startOfDay.isValid) return NextResponse.json({ error: 'Invalid date' }, { status: 400 });

        // Fetch events using Microsoft Graph logic
        const dayEvents = await getEventsForRange(startOfDay.toISO()!, endOfDay.toISO()!);

        // 2. Check each slot
        const availability: Record<string, boolean> = {};

        for (const time of timeSlots) {
            // Construct slot start/end
            const slotStart = DateTime.fromISO(`${date}T${time}`, { zone: 'America/Toronto' });
            const slotEnd = slotStart.plus({ minutes: 60 }); // Assuming 60 min duration

            if (!slotStart.isValid) {
                availability[time] = false;
                continue;
            }

            // Check strict overlap
            // An event overlaps if: (EventStart < SlotEnd) && (EventEnd > SlotStart)
            const isBlocked = dayEvents.some((event: any) => {
                // Microsoft all-day events block the whole calendar day
                if (event.isAllDay) return true;

                const evStart = event.start?.dateTime;
                const evEnd = event.end?.dateTime;

                if (!evStart || !evEnd) return false;

                // Microsoft Graph returns times in UTC format
                const eStartDt = DateTime.fromISO(evStart, { zone: 'UTC' });
                const eEndDt = DateTime.fromISO(evEnd, { zone: 'UTC' });

                return (eStartDt < slotEnd) && (eEndDt > slotStart);
            });

            availability[time] = !isBlocked;
        }

        return NextResponse.json({ availability });

    } catch (error: any) {
        console.error('Error checking available slots:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}