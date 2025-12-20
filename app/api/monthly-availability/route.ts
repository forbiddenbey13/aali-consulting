import { NextRequest, NextResponse } from 'next/server';
import { getBookedSlots } from '@/lib/googleCalendar';
import { DateTime } from 'luxon';

// Config - duplicate from frontend, ideally shared constant
const TIME_SLOTS = [
    "09:00", "11:00",
    "13:00", "15:00", "16:00"
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

        const events = await getBookedSlots(startDt.toISO()!, endDt.toISO()!);

        const bookedMap: Record<string, string[]> = {};
        // Format: { "2025-12-25": ["09:00", "11:00"] } or { "2025-12-25": ["ALL"] }

        // 2. Iterate through every day in the range
        let current = startDt;
        while (current <= endDt) {
            const dateStr = current.toISODate(); // YYYY-MM-DD
            if (!dateStr) break;

            const dayBookedSlots: string[] = [];
            // Fast check: All day events
            const allDayBlock = events.find((e: any) => {
                const eStart = e.start?.date; // YYYY-MM-DD for all-day
                // Google 'end.date' is exclusive (next day) for all-day events.
                // e.g. Start 2025-12-25, End 2025-12-26 covers 25th.
                if (eStart && e.end?.date) {
                    const eStartDt = DateTime.fromISO(eStart, { zone: 'America/Toronto' });
                    const eEndDt = DateTime.fromISO(e.end.date, { zone: 'America/Toronto' });
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
                        // Skip if all-day (handled above, or different check)
                        if (e.start?.date) return false;

                        const eStart = e.start?.dateTime;
                        const eEnd = e.end?.dateTime;
                        if (!eStart || !eEnd) return false;

                        const eStartDt = DateTime.fromISO(eStart, { zone: 'America/Toronto' });
                        const eEndDt = DateTime.fromISO(eEnd, { zone: 'America/Toronto' });

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
