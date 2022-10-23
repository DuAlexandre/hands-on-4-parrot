import { IPostEntity } from "../../../../../domain/entities/posts/post.entity";

export default function (post: IPostEntity) {

    const postOne = {
        idPost: post.idPost,
        content: post.content,
        created_ate: post.created_at,
        updated_at: post.updated_at,
        user_id: post.user_id
    }

    return { postOne: postOne};
}