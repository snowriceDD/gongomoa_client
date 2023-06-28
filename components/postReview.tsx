'use client'

export default function PostReview(props: { name: string | number | readonly string[] | undefined }) {

    return (
        <div>
            <form action="/api/post/newReview" method="POST">
                <input name="name" type="hidden" value={props.name}/>
                <input name="content" type="text" placeholder="내용"></input>
                <input name="password" type="password" placeholder="비밀번호"></input>
                <button type="submit" >submit</button>
            </form>
        </div>
    )
}