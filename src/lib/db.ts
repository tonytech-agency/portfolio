import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connections[0].readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI as string, {
    dbName: 'contactform'}
  );
  console.log("MongoDB connected");
}