import Card from '@/components/Card'
import Header from '@/components/Header'
import Post from '@/models/Post'
import PostService from '@/services/PostService'
import style from '@/styles/Home.module.css'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi"


export default function Home({ posts }: { posts: Post[] }) {

  const [searchValue, setSearchValue] = useState('');
  const [postFiltered, setPostFiltered] = useState<Post[]>(posts);

  useEffect(() => {
    if (searchValue == null || searchValue == '') {
      setPostFiltered(posts);
    }else {
      setPostFiltered(posts.filter(post => post.title.includes(searchValue))); 
    }
  }, [searchValue])

  return (
    <main className={style.homeContainer}>
      <Header />
      <div className={style.banner} >
        <span>Blog</span>
        <div className={style.searchBar} >
          <BiSearch className={style.searchIcon} />
          <input type="text" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} />
        </div>
      </div>
      <div className={style.listCards} >
        {postFiltered.map((post) => (
          <Card post={post} key={post.id} />
        ))}
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