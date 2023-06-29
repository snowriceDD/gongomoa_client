'use client'

import { redirect } from "next/dist/server/api-utils";

interface PostReviewType {
    name: string;
}
export default function PostReview(props: PostReviewType) {

    const handleSubmit = () => {
        redirect
    }
    const handleSubmitLikes = () => {
        redirect
    }

    return (
        <div id="review_component">
            <form action="/api/post/newReview" method="POST">
                <input name="name" type="hidden" value={props.name} />
                <input className="user_id" name="user_id" type="text" minLength={2}
                    maxLength={8} size={10} placeholder="닉네임" required/>
                <input className="input_pw" name="password" type="password" minLength={4}
                    maxLength={8} size={10} placeholder="비밀번호" required/>
                <textarea className="input_content" name="content" minLength={10}
                    maxLength={150} placeholder="내용" required />
                <button className="submit" type="submit" >등록</button>
                <button className="submitUp" type="submit" >등록 + 추천</button>
            </form>
        </div>
    )
}