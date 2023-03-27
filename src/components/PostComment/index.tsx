import style from "./style.module.css";
import Comment from "@/models/Comment";

interface Props {
    comments: Comment[];
}


export default function PostComment({ comments } : Props) {
    return (
        <div className={style.Container}>
            <div className={style.BlogCommentContainer}>
                <h4>Comentários</h4>
                {
                    comments.map((comment) => (
                        <div key={comment.id}>
                            <span>{comment.email}</span>
                            <p>{comment.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}