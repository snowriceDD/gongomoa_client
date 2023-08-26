import Link from "next/link";
import { getList } from "../../util/getList";

interface GetDB {
  _id: undefined;
  name: string;
  title: string;
  href: string;
}

export const metadata = {
  icons: {
    icon: './favicon.ico'
  },
  title: '공고모아 :: 신입 프론트엔드 공고 모음',
  description: '신입 개발자를 위한 채용 공고를 모아봅니다.',
  canonical: 'https://gongomoa.vercel.app/newfe',
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: 'https://gongomoa.vercel.app/newfe',
    title: '공고모아 :: 신입 프론트엔드 공고 모음',
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
};

export default async function NewFE() {

    const result = await getList('newFE')

    return (
      <div className="list-bg">
          <div className="list-block">
          <h1>신입 프론트엔드 공고 모음 - {`${result.length}건`}</h1>
          <p>update : 2023.08.26</p>
          <div className="list-flex">
          {result.map((v:GetDB, i:number) => {
            if (v.href[1] === 'w') {
            return (        
                <div className="list-item" key={i}>
                  <a target="_blank" href={`https://www.wanted.co.kr/${v.href}`}>
                    <p>wanted</p>
                    <h4>{v.name}</h4>
                    <p>{v.title}</p>
                  </a>
                  <Link prefetch={false} href={`/pages/${v.name}`}>리뷰</Link>
                </div>
            )
          } else if (v.href[1] === 'j') {
            return (
                <div className="list-item" key={i}>
                  <a target="_blank" href={`https://career.programmers.co.kr${v.href}`}>
                    <p>programmers</p>
                    <h4>{v.name}</h4>
                    <p>{v.title}</p>
                  </a>
                  <Link prefetch={false} href={`/pages/${v.name}`}>리뷰</Link>
                </div>
            )
          }
          })}
          </div>
          </div>
        </div>
      )
}