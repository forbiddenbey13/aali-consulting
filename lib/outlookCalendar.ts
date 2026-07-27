// lib/outlookCalendar.ts
import { ConfidentialClientApplication } from '@azure/msal-node';
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';

const msalConfig = {
  auth: {
    clientId: process.env.MICROSOFT_CLIENT_ID as string,
    authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
  }
};

const msalClient = new ConfidentialClientApplication(msalConfig);

// Helper function to initialize the Graph Client
async function getGraphClient() {
  const authResponse = await msalClient.acquireTokenByClientCredential({
    scopes: ['https://graph.microsoft.com/.default'],
  });

  return Client.init({
    authProvider: (done) => {
      done(null, authResponse?.accessToken as string);
    }
  });
}

// 1. Fetch Availability for a given date range (Used by both Monthly and Daily routes)
export async function getEventsForRange(startDateTime: string, endDateTime: string) {
  const client = await getGraphClient();
  const userEmail = process.env.OUTLOOK_USER_EMAIL;

  const events = await client
    .api(`/users/${userEmail}/calendarView`)
    .query({
      startDateTime: startDateTime,
      endDateTime: endDateTime
    })
    .select('subject,start,end,isAllDay')
    .get();

  return events.value;
}

// Keep the old name as an alias so we don't break your monthly-availability route
export const getMonthlyAvailability = getEventsForRange;

// 2. Check specific slot availability
export async function checkSlotAvailability(startDateTime: string, endDateTime: string) {
  const client = await getGraphClient();
  const userEmail = process.env.OUTLOOK_USER_EMAIL;

  const events = await client
    .api(`/users/${userEmail}/calendarView`)
    .query({
      startDateTime: startDateTime,
      endDateTime: endDateTime
    })
    .select('id')
    .get();

  return events.value.length === 0;
}

// 3. Create a Booking
export async function createBooking(eventDetails: any) {
  const client = await getGraphClient();
  const userEmail = process.env.OUTLOOK_USER_EMAIL;

  const event = {
    subject: eventDetails.title,
    start: {
      dateTime: eventDetails.start,
      timeZone: 'Eastern Standard Time'
    },
    end: {
      dateTime: eventDetails.end,
      timeZone: 'Eastern Standard Time'
    },
    attendees: [
      {
        emailAddress: {
          address: eventDetails.attendeeEmail,
          name: eventDetails.attendeeName
        },
        type: 'required'
      }
    ]
  };

  const newEvent = await client
    .api(`/users/${userEmail}/events`)
    .post(event);

  return newEvent;
}

// 4. Delete a Booking
export async function deleteBookingEvent(eventId: string) {
  const client = await getGraphClient();
  const userEmail = process.env.OUTLOOK_USER_EMAIL;

  await client
    .api(`/users/${userEmail}/events/${eventId}`)
    .delete();

  return true;
}

// 5. Update a Booking
export async function updateBookingEvent(eventId: string, eventDetails: any) {
  const client = await getGraphClient();
  const userEmail = process.env.OUTLOOK_USER_EMAIL;

  const event: any = {
    start: {
      dateTime: eventDetails.start,
      timeZone: 'Eastern Standard Time'
    },
    end: {
      dateTime: eventDetails.end,
      timeZone: 'Eastern Standard Time'
    }
  };

  // Optionally update location if platform was changed
  if (eventDetails.platform) {
      event.location = {
          displayName: eventDetails.platform
      };
  }

  const updatedEvent = await client
    .api(`/users/${userEmail}/events/${eventId}`)
    .patch(event);

  return updatedEvent;
}