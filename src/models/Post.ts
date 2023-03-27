import Comment from "./Comment";

export default class Post {
    constructor(
        public id: string,
        public title: string,
        public content: string,
        public userId: string,
        public comments: Comment[] = []
    ) { }
}