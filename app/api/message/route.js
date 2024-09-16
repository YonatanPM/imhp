import { connectMongoDB } from "@/libs/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, message } = await request.json();
    await connectMongoDB();
    await Message.create({
      name,
      message,
    });

    // Return a success response
    return NextResponse.json({ message: "Message Submitted" }, { status: 201 });
  } catch (error) {
    // Catch any errors and return an error response
    return NextResponse.json(
      { error: "Failed to submit the message" },
      { status: 500 }
    );
  }
}
