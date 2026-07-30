import { NextRequest, NextResponse } from 'next/server';
import { getEventsForRange } from '@/lib/outlookCalendar';
import { DateTime } from 'luxon';

// Config - duplicate from frontend, ideally shared constant
const TIME_SLOTS = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00"
];

export async function POST(request: NextRequest) {
    try {
        const { startDate, endDate } = await request.json(); // YYYY-MM-DD

        if (!startDate || !endDate) {
            return NextResponse.json({ error: 'Start/End date required' }, { status: 400 });
        }

        // 1. Get all events for the range safely
        // Parse strict Toronto midnight
        const startDt = DateTime.fromISO(startDate, { zone: 'America/Toronto' }).startOf('day');
        const endDt = DateTime.fromISO(endDate, { zone: 'America/Toronto' }).endOf('day');

        if (!startDt.isValid || !endDt.isValid) {
            return NextResponse.json({ error: 'Invalid dates' }, { status: 400 });
        }

        // Fetch events from Outlook
        const events = await getEventsForRange(startDt.toISO()!, endDt.toISO()!);

        const bookedMap: Record<string, string[]> = {};

        // Establish what "today" is in your timezone so we can block it out
        const today = DateTime.now().setZone('America/Toronto').startOf('day');

        // 2. Iterate through every day in the range
        let current = startDt;
        while (current <= endDt) {
            const dateStr = current.toISODate(); // YYYY-MM-DD
            if (!dateStr) break;

            // NEW: If the current date in the loop is today or earlier, block the whole day
            if (current <= today) {
                bookedMap[dateStr] = ["ALL"];
                current = current.plus({ days: 1 });
                continue; // Skip the Outlook check and move to the next day
            }

            const dayBookedSlots: string[] = [];
            
            // Fast check: All day events
            const allDayBlock = events.find((e: any) => {
                // Microsoft Graph flags all-day events with `isAllDay` and sets times to midnight UTC
                if (e.isAllDay && e.start?.dateTime && e.end?.dateTime) {
                    const eStartDt = DateTime.fromISO(e.start.dateTime, { zone: 'UTC' });
                    const eEndDt = DateTime.fromISO(e.end.dateTime, { zone: 'UTC' });
                    return current >= eStartDt && current < eEndDt;
                }
                return false;
            });

            if (allDayBlock) {
                bookedMap[dateStr] = ["ALL"];
            } else {
                // Check specific time slots
                for (const time of TIME_SLOTS) {
                    const slotStart = DateTime.fromISO(`${dateStr}T${time}`, { zone: 'America/Toronto' });
                    const slotEnd = slotStart.plus({ minutes: 60 });

                    const isBlocked = events.some((e: any) => {
                        // Skip if all-day (already handled above)
                        if (e.isAllDay) return false;

                        const eStart = e.start?.dateTime;
                        const eEnd = e.end?.dateTime;
                        if (!eStart || !eEnd) return false;

                        // Microsoft Graph returns times in UTC format
                        const eStartDt = DateTime.fromISO(eStart, { zone: 'UTC' });
                        const eEndDt = DateTime.fromISO(eEnd, { zone: 'UTC' });

                        // Strict overlap
                        return (eStartDt < slotEnd) && (eEndDt > slotStart);
                    });

                    if (isBlocked) {
                        dayBookedSlots.push(time);
                    }
                }
                if (dayBookedSlots.length > 0) {
                    bookedMap[dateStr] = dayBookedSlots;
                }
            }

            current = current.plus({ days: 1 });
        }

        return NextResponse.json({ bookedMap });

    } catch (error: any) {
        console.error('Error checking monthly availability:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}