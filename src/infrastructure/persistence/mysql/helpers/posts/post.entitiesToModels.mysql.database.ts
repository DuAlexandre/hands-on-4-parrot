import { IPostEntity } from "../../../../../domain/entities/posts/post.entity";

export default function (post: IPostEntity) {

    const postOne = {
        idPost: post.idPost,
        content: post.content,
        user_id: post.user_id
    }

    return { postOne: postOne};
}