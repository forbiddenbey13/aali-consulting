import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    const keyString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!keyString || !calendarId) {
      return NextResponse.json({
        error: 'Missing environment variables',
        hasKey: !!keyString,
        hasCalendarId: !!calendarId,
      }, { status: 500 });
    }

    const credentials = JSON.parse(keyString);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth: await auth.getClient() });

    // Try to get calendar info
    const calInfo = await calendar.calendars.get({
      calendarId: calendarId,
    });

    // Try to list events
    const events = await calendar.events.list({
      calendarId: calendarId,
      maxResults: 5,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return NextResponse.json({
      success: true,
      calendar: {
        id: calInfo.data.id,
        summary: calInfo.data.summary,
        timeZone: calInfo.data.timeZone,
      },
      serviceAccountEmail: credentials.client_email,
      eventsCount: events.data.items?.length || 0,
      recentEvents: events.data.items?.map(e => ({
        summary: e.summary,
        start: e.start?.dateTime || e.start?.date,
      })),
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      code: error.code,
      details: error.errors,
    }, { status: 500 });
  }
}