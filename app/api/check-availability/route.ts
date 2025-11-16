import { NextRequest, NextResponse } from 'next/server';
import { getBookedSlots } from '@/lib/googleCalendar';

export async function POST(request: NextRequest) {
  try {
    const { startDate, endDate } = await request.json();

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'Start date and end date are required' },
        { status: 400 }
      );
    }

    const bookedSlots = await getBookedSlots(startDate, endDate);

    return NextResponse.json({ bookedSlots });
  } catch (error: any) {
    console.error('Error checking availability:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to check availability' },
      { status: 500 }
    );
  }
}