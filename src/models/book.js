// models/Booking.js
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Check if model exists to avoid OverwriteModelError in development
const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

export default Booking;
