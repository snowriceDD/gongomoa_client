import { connectDB } from "@/util/database";

interface Post {
    rawHeaders: any; //수정해라.
    body: any;
    title: string
    user_id: string
    password: string
    content: string
    likes: number
}

export default async function newReview(req: Post, res: any) {
    let red;
    let client = await connectDB;
    const db = client.db('forum');
    try { 
        red = (req.rawHeaders[15].split('/').pop());
        await db.collection('post').insertOne(
            { 
                title: req?.body.name, 
                user_id: req?.body.user_id,
                password: req?.body.password, 
                content: req?.body.content,
                likes: req?.body.likes,
            }
        );
    } catch(e) {
        console.log(e);
    }

    return res.redirect(302, `/pages/${red}`);
}