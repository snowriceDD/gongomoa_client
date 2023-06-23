// import { connectDB } from "@/util/database";

// interface Post {
//     title: string
//     content: string
//     password: string
//   }

// export default async function newReview(req: Post, res: Response) {
//     let client = await connectDB;
//     const db = client.db('forum');
//     try { 
//         await db.collection('post').insertOne(
//             { title: req?.title, content: req?.content, password: req?.password }
//         );
//     } catch(e) {
//         console.log(e);
//     }

//     return res.redirect(302, '/list')
// }