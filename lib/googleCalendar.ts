import { google } from "googleapis";

// Parse service account JSON from env
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}");

if (!serviceAccount.client_email || !serviceAccount.private_key) {
  throw new Error("❌ Missing GOOGLE_SERVICE_ACCOUNT_KEY env variable");
}

// Create JWT auth client
const auth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

// Calendar instance
const calendar = google.calendar({ version: "v3", auth });

import { DateTime } from "luxon";

/* ---------------------------------------------
   Format date + time to RFC3339 in Toronto Time
---------------------------------------------- */
function buildDateTime(date: string, time: string) {
  // date: "YYYY-MM-DD", time: "HH:mm"
  // Create a DateTime in Toronto timezone
  const dt = DateTime.fromISO(`${date}T${time}`, { zone: "America/Toronto" });
  if (!dt.isValid) {
    throw new Error(`Invalid date/time: ${date} ${time} - ${dt.invalidReason}`);
  }
  return dt.toISO(); // Returns 2025-12-25T09:00:00.000-05:00
}

/* ---------------------------------------------
   GET BOOKED SLOTS
---------------------------------------------- */
/* ---------------------------------------------
   GET BOOKED SLOTS
---------------------------------------------- */
export async function getBookedSlots(startDate: string, endDate: string) {
  try {
    // Ensure we parse the input dates in Toronto time if they interpret to midnight
    // or preserve the instant if they are already full ISO strings.
    const start = DateTime.fromISO(startDate, { zone: 'America/Toronto' }).toISO();
    const end = DateTime.fromISO(endDate, { zone: 'America/Toronto' }).toISO();

    if (!start || !end) {
      throw new Error("Invalid start/end date format");
    }

    const events = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      timeMin: start,
      timeMax: end,
      singleEvents: true,
      orderBy: "startTime",
    });

    return events.data.items || [];
  } catch (err: any) {
    console.error("❌ Error fetching booked slots:", err.message);
    throw new Error("Failed to fetch booked slots");
  }
}

/* ---------------------------------------------
   CHECK SLOT AVAILABILITY
---------------------------------------------- */
export async function checkSlotAvailability({
  date,
  time,
  duration,
}: {
  date: string;
  time: string;
  duration: number;
}) {
  const start = buildDateTime(date, time);
  const end = new Date(new Date(start).getTime() + duration * 60000).toISOString();

  const events = await getBookedSlots(start, end);

  return events.length === 0; // no conflicts
}

/* ---------------------------------------------
   CREATE BOOKING EVENT
---------------------------------------------- */
export async function createBooking(
  { date, time, duration }: { date: string; time: string; duration: number },
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    service: string;
    notes?: string;
  }
) {
  const start = buildDateTime(date, time);
  const end = new Date(new Date(start).getTime() + duration * 60000).toISOString();

  const event = {
    summary: `${customer.service} - ${customer.firstName} ${customer.lastName}`,
    description: `
Service: ${customer.service}
Name: ${customer.firstName} ${customer.lastName}
Email: ${customer.email}
Phone: ${customer.phone || "N/A"}
Notes: ${customer.notes || "None"}
    `.trim(),

    start: { dateTime: start, timeZone: "America/Toronto" },
    end: { dateTime: end, timeZone: "America/Toronto" },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      requestBody: event, // <-- IMPORTANT
    });

    return {
      eventId: response.data.id,
    };
  } catch (err: any) {
    console.error("❌ Error creating event:", err.message);
    throw new Error("Failed to create booking");
  }
}
