import { IPostEntity } from "../../../../../domain/entities/posts/post.entity";

export default function (post: any): IPostEntity | undefined {
    if (!post) {
        return;
    }

    let postOne: IPostEntity = {
        idPost: post.idPost,
        content: post.content,
        created_at: post.created_at,
        updated_at: post.updated_at,
        user_id: post.user_id
    }

    return (postOne as IPostEntity)
}