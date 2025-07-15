import { connectDB } from "@/lib/connectDB"


export const POST = async(request)=>{
    const booking = await request.json()
    const db = await connectDB();
    try {
        const bookingCollection = await db.collection('bookings')
        const newBooking = await bookingCollection.insertOne(booking)
        return Response.json({message: "Booked successful", response: newBooking})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {status: 400})
    }
}