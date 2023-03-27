
import Image from "next/image"
import styles from "./style.module.css";
import RetangleImage from "../../assets/Retangle3.jpeg";
import Link from "next/link";

export default function Card(props: any) {

  return (

    <Link href={`/post/${props.link}`} className={styles.links}>
      <article className={styles.cardContainer}>
        <Image src={RetangleImage} alt="a" width={250} height={250} className={styles.cardImage} />
        <strong>{props.title}</strong>
        <span>{props.description}</span>
      </article>
    </Link>
  )
}