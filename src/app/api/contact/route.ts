import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";
import Subscribe from "@/models/subscribe";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    if (data.type === "subscribe") {
      const { email } = data;
      if (!email) return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });

      await Subscribe.create({ email });
      return NextResponse.json({ success: true, message: "Subscribed!" });
    }

    if (data.type === "contact") {
      const { name, email, message } = data;
      if (!name || !email || !message)
        return NextResponse.json({ success: false, message: "All fields required" }, { status: 400 });

      await Contact.create({ name, email, message });
      return NextResponse.json({ success: true, message: "Message sent!" });
    }

    return NextResponse.json({ success: false, message: "Unknown type" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}
