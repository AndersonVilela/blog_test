import style from "./style.module.css";

interface Props {
  body: string;
  title: string;
}

export default function PostDetailComponent(props: Props) {

  return (
    <div className={style.PostDetailContainer}>
      <h2>{props.title}</h2>
      <p className={style.body}>{props.body}</p>
    </div>
  )
}