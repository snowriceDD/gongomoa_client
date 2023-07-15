import { connectDB } from "@/util/database";
import { cache } from "react";

export const getList = cache(async (position: string) => {
    const db = (await connectDB).db('forum');
    const result = await db.collection(`${position}`).find().toArray();
    return result;
})
