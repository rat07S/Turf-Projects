// utils/database.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://sit22it012:GN1U53YfOTR2iqFg@cluster0.sjck0js.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI

export const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      // If already connected, return
      console.log('Already connected to the database');
      return;
    }
    // Establish a new connection if not already connected
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); 
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Database connection failed');
  }
};
 