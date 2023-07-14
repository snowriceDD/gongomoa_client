import { connectDB } from "../../util/database";
import Link from "next/link";

interface GetDB {
  _id: undefined;
  name: string;
  title: string;
  href: string;
}

export default async function NewBE() {

    const db = (await connectDB).db('forum');
    let result = await db.collection('newBE').find().toArray();  
    
    return (
        <div className="list-bg">
          <div className="list-block">
          <h1>신입 백엔드 공고 모음 - {`${result.length}건`}</h1>
          <p>update : 2023.07.14</p>
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
