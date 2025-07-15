import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (request, {params})=>{
    const db = await connectDB();
    const deleteBookingCollection = db.collection("newBookings")

    try {
        const res = await deleteBookingCollection.deleteOne({_id: new ObjectId(params.id)})
        return Response.json({message: "Booking has been deleted", response: res})
    } catch (error) {
        return Response.json({message: "Somethings went wrong"}, {status: 400})
    }
}