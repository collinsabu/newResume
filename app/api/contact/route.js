import { NextResponse } from "next/server";
import mongoose from "mongoose";

// MongoDB Connection
const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) return mongoose.connection.asPromise();
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Define Mongoose Schema
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

// API Handler
export async function POST(req) {
  try {
    await connectMongo();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newMessage = await Message.create({ name, email, message });

    return NextResponse.json({ message: "Message sent successfully", data: newMessage }, { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


// API Handler for GET
export async function GET() {
  try {
    await connectMongo();
    const messages = await Message.find().sort({ createdAt: -1 });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}