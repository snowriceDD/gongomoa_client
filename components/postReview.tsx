
export default function PostReview(props:string) {

    return (
        <div>
            <form action="/api/post/newReview" method="POST">
                <input name="name" type="hidden" />
                <input name="content" placeholder="내용"></input>
                <input name="password" placeholder="비밀번호"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}