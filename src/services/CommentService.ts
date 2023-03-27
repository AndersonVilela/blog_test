import HttpClient from "../config/HttpClient";
import Comment from "../models/Comment";

export default class CommentService {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    public getAll(postId: string): Promise<Comment[]> {
        return this.httpClient.get<{
            postId: number,
            id: number,
            name: string,
            email: string,
            body: string
        }[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => {
                return response.data.map((comment) => {
                    return new Comment(
                        String(comment.id),
                        comment.name,
                        comment.email,
                        comment.body
                    )
                })
            })
    }

}