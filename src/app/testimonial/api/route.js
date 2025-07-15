import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const testimonialCollection = await db.collection("testimonial");

  try {
    const res = await testimonialCollection.find().toArray();
    return NextResponse.json({ message: "Testimonial data received!", res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
  }
};
