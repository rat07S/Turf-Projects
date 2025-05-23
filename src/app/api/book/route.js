// app/api/book/route.js
import { NextResponse } from 'next/server';
import { connectToDB } from '../../../utlis/database';
import Booking from '../../../models/book';

export async function POST(request) {
  try {
    const { name, email, phone, date, time } = await request.json();

    // Basic validation
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Connect to DB
    await connectToDB();

    // Create and save booking
    const newBooking = new Booking({ name, email, phone, date, time });
    await newBooking.save();

    return NextResponse.json(
      { message: 'Booking confirmed', bookingId: newBooking._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
