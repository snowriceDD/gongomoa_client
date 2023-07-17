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

export async function generateMetadata(props: { params: { name: string; }}) {
    const decodePath = decodeURIComponent(props.params.name);
    const query = { title: decodePath }

    return {
        title: `공고모아 :: 기업 리뷰 - ${query.title}`,
        description: `${query.title} 기업 채용공고 지원자들의 리뷰입니다.`,
        canonical: `https://gongomoa.vercel.app/pages/${query.title}`,
        openGraph: {
            type: "website",
            locale: "ko_KR",
            url: `https://gongomoa.vercel.app/pages/${query.title}`,
            title: `공고모아 :: 기업 리뷰 - ${query.title}`,
            site_name: "공고모아",
            images: [
            {
                url: "./favicon.ico",
                width: 285,
                height: 167,
                alt: "이미지"
            }
            ]
        },
        twitter: {
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
        },
    }
}

export default async function Detail(props: { params: { name: string; }}) {
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