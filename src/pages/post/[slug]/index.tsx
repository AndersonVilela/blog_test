import PostService from "@/services/PostService";
import ReadPage from "../../../components/ReadPage"

type Props = {
    params: {
        slug: string;
    };
};

export default async function BlogPostDetailsPage({ params }: Props) {
    const { slug } = params

    return (
        <>
            <p>{slug}</p>
        </>
    )
}