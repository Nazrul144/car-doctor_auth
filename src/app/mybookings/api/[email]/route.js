import { connectDB } from "@/lib/connectDB"

export const GET = async(request, {params})=>{
    
    const db = await connectDB()
    const bookingCollection = db.collection('newBookings')
    try {
        const myBooking = await bookingCollection.find({email: params.email}).toArray()
        console.log(myBooking);
        return Response.json(myBooking)
    } catch (error) {
        return Response.json({message: "Something Went Wrong"}, {status: 400})
    }
}