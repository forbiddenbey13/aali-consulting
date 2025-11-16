import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

// -----------------------
// AUTH
// -----------------------
const getServiceAccountAuth = () => {
  try {
    const keyString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    
    if (!keyString) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set');
    }

    const credentials = JSON.parse(keyString);

    if (!credentials.private_key || !credentials.client_email) {
      throw new Error('Invalid service account credentials format');
    }

    return new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });
  } catch (error: any) {
    console.error('Error parsing service account credentials:', error.message);
    throw new Error(`Invalid Google service account credentials: ${error.message}`);
  }
};

export const getCalendarClient = async () => {
  if (!CALENDAR_ID) {
    throw new Error('GOOGLE_CALENDAR_ID environment variable is not set');
  }

  const auth = getServiceAccountAuth();
  const authClient = await auth.getClient();
  
  return google.calendar({ version: 'v3', auth: authClient });
};

// -----------------------
// TYPES
// -----------------------
export interface BookingSlot {
  date: string;
  time: string;
  duration?: number;
}

export interface BookingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  notes?: string;
}

// -----------------------
// CHECK SLOT AVAILABILITY
// -----------------------
export const checkSlotAvailability = async (slot: BookingSlot): Promise<boolean> => {
  try {
    const calendar = await getCalendarClient();
    
    const startDateTime = new Date(`${slot.date}T${slot.time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + (slot.duration || 60) * 60000);

    const response = await calendar.events.list({
      calendarId: CALENDAR_ID!,
      timeMin: startDateTime.toISOString(),
      timeMax: endDateTime.toISOString(),
      singleEvents: true,
    });

    return (response.data.items?.length || 0) === 0;
  } catch (error: any) {
    console.error('Error checking slot availability:', error.message);
    if (error.code === 404) {
      throw new Error('Calendar not found. Check GOOGLE_CALENDAR_ID and sharing settings.');
    }
    throw error;
  }
};

// -----------------------
// GET BOOKED SLOTS
// -----------------------
export const getBookedSlots = async (
  startDate: string,
  endDate: string
): Promise<BookingSlot[]> => {
  try {
    const calendar = await getCalendarClient();

    const response = await calendar.events.list({
      calendarId: CALENDAR_ID!,
      timeMin: new Date(`${startDate}T00:00:00`).toISOString(),
      timeMax: new Date(`${endDate}T23:59:59`).toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const bookedSlots: BookingSlot[] = [];
    
    response.data.items?.forEach((event) => {
      if (event.start?.dateTime) {
        const startDate = new Date(event.start.dateTime);
        const endDate = new Date(event.end?.dateTime || event.start.dateTime);
        const duration = (endDate.getTime() - startDate.getTime()) / 60000;

        bookedSlots.push({
          date: startDate.toISOString().split('T')[0],
          time: `${String(startDate.getHours()).padStart(2, '0')}:${String(startDate.getMinutes()).padStart(2, '0')}`,
          duration,
        });
      }
    });

    return bookedSlots;
  } catch (error: any) {
    console.error('Error getting booked slots:', error.message);
    if (error.code === 404) {
      throw new Error('Calendar not found. Check GOOGLE_CALENDAR_ID and sharing settings.');
    }
    throw error;
  }
};

// -----------------------
// CREATE BOOKING (NO ATTENDEES, NO MEET LINK)
// -----------------------
export const createBooking = async (
  slot: BookingSlot,
  details: BookingDetails
): Promise<{ eventId: string }> => {
  try {
    const calendar = await getCalendarClient();
    
    const startDateTime = new Date(`${slot.date}T${slot.time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + (slot.duration || 60) * 60000);

    const event = {
      summary: `${details.service} - ${details.firstName} ${details.lastName}`,
      description: `
Consultation Booking

Client: ${details.firstName} ${details.lastName}
Email: ${details.email}
Phone: ${details.phone || 'N/A'}
Service: ${details.service}

Notes: ${details.notes || 'None'}
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/Toronto',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/Toronto',
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 60 },
          { method: 'popup', minutes: 1440 }, // 24 hrs
        ],
      },
      colorId: '9',
    };

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID!,
      requestBody: event,
    });

    return {
      eventId: response.data.id || '',
    };
  } catch (error: any) {
    console.error('Error creating booking:', error.message);
    throw error;
  }
};

// -----------------------
// CANCEL BOOKING
// -----------------------
export const cancelBooking = async (eventId: string): Promise<void> => {
  try {
    const calendar = await getCalendarClient();
    
    await calendar.events.delete({
      calendarId: CALENDAR_ID!,
      eventId,
    });
  } catch (error: any) {
    console.error('Error canceling booking:', error.message);
    throw error;
  }
};
