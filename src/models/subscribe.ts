import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Subscribe = mongoose.models.Subscribe || mongoose.model("Subscribe", subscribeSchema, "subscribe");
export default Subscribe;
