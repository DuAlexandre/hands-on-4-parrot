import  express  from "express";
import debug from "debug";
import listPostUsecase from "../../../../domain/usecases/posts/list.post.usecase";
import readPostUsecase from "../../../../domain/usecases/posts/read.post.usecase";
import createPostUsecase from "../../../../domain/usecases/posts/create.post.usecase";
import updatePostUsecase from "../../../../domain/usecases/posts/update.post.usecase";
import deletePostUsecase from "../../../../domain/usecases/posts/delete.post.usecase";

const log: debug.IDebugger = debug('app:posts-controller');

class PostsController {
    async listPosts(req: express.Request, res: express.Response) {
        const posts = await listPostUsecase.execute();
        res.status(200).send(posts);
    }

    async getPostById(req: express.Request, res: express.Response) {
        const post = await readPostUsecase.execute({
            idPost: Number(req.params.idPost)
        });
        res.status(200).send(post);
    }

    async createPost(req: express.Request, res: express.Response) {
        const post = await createPostUsecase.execute(req.body);
        log(post);
        res.status(201).send(post);
    }

    async updatePost(req: express.Request, res: express.Response) {
        const post = await updatePostUsecase.execute(req.body);
        res.status(200).send(post);
    }

    async deletePost(req: express.Request, res: express.Response) {
        const post = await deletePostUsecase.execute({
            idPost: Number(req.params.idPost)
        });
        res.status(204).send();
    }
}

export default new PostsController();