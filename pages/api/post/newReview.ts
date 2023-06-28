import { connectDB } from "@/util/database";

interface Post {
    rawHeaders: Array<T>;
    body: any;
    
    title: string
    content: string
    password: string
  }

export default async function newReview(req: Post, res: any) {
    let red;
    let client = await connectDB;
    const db = client.db('forum');
    try { 
        red = (req.rawHeaders[15].split('/').pop());
        await db.collection('post').insertOne(
            { title: req?.body.name, content: req?.body.content, password: req?.body.password }
        );
    } catch(e) {
        console.log(e);
    }

    return res.redirect(302, `/${red}`);
    // return res.redirected;
}