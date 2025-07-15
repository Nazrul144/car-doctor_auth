import { connectDB } from "@/lib/connectDB"

export const POST = async(request)=>{
    const newBooking = await request.json()

    const db = await connectDB();
    const newBookingsCollection = db.collection('newBookings')
    try {
        const res = await newBookingsCollection.insertOne(newBooking)
        return Response.json({message: "booking successful", res}, {status: 200})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {status: 400})
    }
}