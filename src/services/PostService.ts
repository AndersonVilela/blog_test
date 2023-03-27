import HttpClient from "../config/HttpClient";
import Post from "../models/Post";
import CommentService from "./CommentService";

export default class PostService {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    public getAll(): Promise<Post[]> {
        return this.httpClient.get<{
            userId: number,
            id: number,
            title: string,
            body: string
        }[]>('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.data.map((post) => {
                    return JSON.parse(JSON.stringify(new Post(
                        String(post.id),
                        post.title,
                        post.body,
                        String(post.userId))) 
                    )
                })
            })
    }

    public async getOne(id: string): Promise<Post> {
        try {
            const comments = await new CommentService().getAll(id);
            const { data: post } = await this.httpClient.get<{
                userId: number,
                id: number,
                title: string,
                body: string
            }>(`https://jsonplaceholder.typicode.com/posts/${id}`)

            return new Post(
                String(post.id),
                post.title,
                post.body,
                String(post.userId),
                comments
            )

        } catch (error) {
            throw error;
        }

    }
}