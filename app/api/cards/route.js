import { connectMongoDB } from "@/libs/mongodb";
import Card from "@/models/card";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const cards = await Card.find();
  //console.log("cards, ", cards);
  return NextResponse.json({ cards });
}

export async function POST(request) {
  const { service, gener, url, image } = await request.json();
  await connectMongoDB();
  await Card.create({ service, gener, url, image });
  return NextResponse.json({ message: "Order Submited" }, { status: 201 });
}
