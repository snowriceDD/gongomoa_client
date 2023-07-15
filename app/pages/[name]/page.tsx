import PostReview from "@/components/postReview";
import { getList } from "@/util/getList";

interface ReviewType {
    _id: undefined;
    title: string;
    user_id: string;
    password: string;
    content: string;
    date: Date;
    user_ip: string;
    likes: number;
}

export default async function Detail(props: { params: { name: string; }; }) {
    const decodePath = decodeURIComponent(props.params.name);
    const query = { title: decodePath }
    let result = await getList('post', query)
    
    if (result.length > 0) {
    return (
        <div className="list-bg">
            <div className="list-block">
                <h1>{query.title} 리뷰</h1>
                <section className="review-zone">
                {result.map((v:ReviewType, i:number) => {
                    return (
                        <div className="review-card" key={i}>
                            <p className="user_na">{v.user_id}</p>
                            <p className="user_ip">아이피 지역</p>
                            <p>{v.content}</p>
                            <button className="review-Deletebtn" type="button">🆇</button>
                        </div>
                    )
                })}
                <PostReview name={query.title} />
                </section>
            </div>
        </div>
    );
    } else {
        return (
            <div className="list-bg">
            <div className="list-block">
                <h1>{query.title}</h1>
                <section className="review-zone">
                <h1>아직 작성된 리뷰가 없습니다</h1>
                <PostReview name={query.title} />
                </section>
            </div>
            </div>
        )
    }
}