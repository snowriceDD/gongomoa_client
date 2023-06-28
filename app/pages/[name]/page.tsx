import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

interface ReviewType {
    _id: undefined;
    title: string;
    content: string;
    password: string;
    date: Date;
    user_ip: string;
}

export default async function Detail(props: { params: { name: string; }; }) {
    const db = (await connectDB).db('forum');
    const decodePath = decodeURIComponent(props.params.name);
    const query = { title: decodePath}
    let result = await db.collection('post').find(query).toArray()
    // { title : props.params.name }
    
    if (result.length > 0) {
    return (
        <div className="list-bg">
            <div className="list-block">
                <h1>{result[0].title} 리뷰</h1>
                <section className="review-zone">
                {result.map((v:ReviewType, i:number) => {
                    return (
                        <div className="review-card" key={i}>
                            <p className="user_na">익명%</p>
                            <p className="user_ip">아이피 지역</p>
                            <p>{v.content}</p>
                        </div>
                    )
                })}
                </section>
            </div>
        </div>
    );
    } else {
        return (
            <div className="list-bg">
            <div className="list-block">
                <h1>작성된 리뷰가 없습니다</h1>
            </div>
            </div>
        )
    }
}