import Post from "@/models/Post";
import PostService from "@/services/PostService";
import { GetStaticPaths, GetStaticProps } from "next";
import ReadPage from "../../../components/ReadPage"
import PostComment from "@/components/PostComment";
import Header from "@/components/Header";

type Props = {
    post: Post;
};

export default function BlogPostDetailsPage(props: Props) {

    return (
        <>
            <Header />
            <ReadPage body={props.post.content} title={props.post.title} />
            <PostComment comments={props.post.comments} />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await new PostService().getAll();

    return {
        paths: posts.map((post) => {
            return { params: { slug: post.id } }
        }),
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params;
    const post = await new PostService().getOne(String(slug));

    return {
        props: {
            post,
        }
    }
}

