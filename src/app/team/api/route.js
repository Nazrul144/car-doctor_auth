import { connectDB } from "@/lib/connectDB"

export const GET = async()=>{
    const db = await connectDB();
    const teamCollection = await db.collection('team');

    try {
        const data = await teamCollection.find().toArray()
        return Response.json({message: "Data received", data}, {status: 200})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {status: 400})
    }
}