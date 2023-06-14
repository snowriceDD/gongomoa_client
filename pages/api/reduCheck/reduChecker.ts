import { connectDB } from "@/util/database";

interface GetDB {
    _id: undefined;
    name: string;
    title: string;
    href: string;
  }

export default async function reduChecker(req: Request, res: Response) {
    const db = (await connectDB).db('forum');
    let result = await db.collection('gongo').find().toArray();  
    

}

//이거 안쓰는게 맞다
/**
 * 크롤링 모델에 들어가야 할 함수
 */