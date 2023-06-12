import { connectDB } from "../../util/database";

interface GetDB {
  _id: undefined;
  name: string;
  title: string;
  href: string;
}

export default async function List() {

    const db = (await connectDB).db('forum');
    let result = await db.collection('gongo').find().toArray();  
    
    return (
        <div className="list-bg">
          <div className="list-block">
          <h1>신입 프론트엔드 공고 모음</h1>
          {result.map((v:GetDB, i:number) => {
            if (v.href[1] === 'w') {
            return (
              <div>
                <div className="list-item" key={i}>
                  <a target="_blank" href={`https://www.wanted.co.kr/${v.href}`}>
                    <p>wanted</p>
                    <h4>{v.name}</h4>
                    <p>{v.title}</p>
                  </a>
                </div>
              </div>
            )
          } else if (v.href[1] === 'j') {
            return (
              <div>
                <div className="list-item" key={i}>
                  <a target="_blank" href={`https://career.programmers.co.kr${v.href}`}>
                    <p>programmers</p>
                    <h4>{v.name}</h4>
                    <p>{v.title}</p>
                  </a>
                </div>
              </div>
            )
          }
          })}
          </div>
        </div>
      )
}