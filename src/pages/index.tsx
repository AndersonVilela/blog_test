import Card from '@/components/Card'
import Header from '@/components/Header'
import Post from '@/models/Post'
import PostService from '@/services/PostService'
import style from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'
import { BiSearch } from "react-icons/bi"


export default function Home({ posts }: { posts: Post[] }) {
  console.log(posts)
  return (
    <main className={style.homeContainer}>
      <Header />
      <div className={style.banner} >
        <span>Blog</span>
        <div className={style.searchBar} >
          <BiSearch className={style.searchIcon} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={style.listCards} >
         {posts.map((post) => (
          <Card title={post.title} description={post.content} links={post.id} key={post.id} />
         ))}
         {Post} 
      </div>
    </main>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await new PostService().getAll()
  return {
    props: {
      posts,
    }
  }
}