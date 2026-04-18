import mongoose from 'mongoose';
import dotenv from 'dotenv'

/**
 * TODO: Connect to MongoDB
 *
 * 1. Check if uri is provided (throw error if not: "MongoDB URI is required")
 * 2. Connect using mongoose.connect(uri)
 * 3. Return mongoose.connection
 */
export async function connectDB(uri) {
  // Your code here
  try {
    if(!uri){
      throw new Error("MongoDB URI is required")
    }
    const conn = await mongoose.connect(uri)
  
    return conn;
  } catch (error) {
    throw new Error('MongoDB URI is required')
  }
}
