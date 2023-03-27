1
import Image from "next/image"
import styles from "./style.module.css";
import RetangleImage from "../../assets/Retangle3.jpeg";
import Link from "next/link";
import Post from "@/models/Post";

interface Props {
  post: Post;
}

export default function Card({ post }: Props) {

  return (

    <Link href={`/post/${post.id}`} className={styles.links}>
      <article className={styles.cardContainer}>
        <Image src={RetangleImage} alt="a" width={250} height={250} className={styles.cardImage} />
        <strong>{post.title}</strong>
        <span>{post.content}</span>
      </article>
    </Link>
  )
}