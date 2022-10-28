import express  from "express";
import debug from "debug";
import listPostUsecase from "../../../../domain/usecases/posts/list.post.usecase";
import readPostUsecase from "../../../../domain/usecases/posts/read.post.usecase";
import createPostUsecase from "../../../../domain/usecases/posts/create.post.usecase";
import updatePostUsecase from "../../../../domain/usecases/posts/update.post.usecase";
import deletePostUsecase from "../../../../domain/usecases/posts/delete.post.usecase";
import logger from "../../../../infrastructure/logs/winston.logs";
import constantsConfig from "../../../../infrastructure/config/constants.config";

const log: debug.IDebugger = debug('app:posts-controller');

class PostsController {
    async listPosts(req: express.Request, res: express.Response) {
        try {
            const posts = await listPostUsecase.execute();
            res.status(200).send(posts);
        } catch (error) {
            logger.error('Erro no listPosts do PostController:', error);
            res.status(404).send(constantsConfig.POSTS.MESSAGES.ERROR.ERROR404);
        }
        
    }

    async getPostById(req: express.Request, res: express.Response) {
        try {
            const post = await readPostUsecase.execute({
                idPost: Number(req.params.idPost)
            });
            res.status(200).send(post);
        } catch (error) {
            logger.error('Erro no getPostById do PostController:', error);
            res.status(404).send(constantsConfig.POSTS.MESSAGES.ERROR.ERROR404);
        }
        
    }

    async createPost(req: express.Request, res: express.Response) {
        try {
            const post = await createPostUsecase.execute(req.body);
            log(post);
            res.status(201).send(post);
        } catch (error) {
            logger.error('Erro no createPost do PostController:', error);
            res.status(500).send(constantsConfig.POSTS.MESSAGES.ERROR.ERROR500);
        }
        
    }

    async updatePost(req: express.Request, res: express.Response) {
        try {
            const post = await updatePostUsecase.execute(req.body);
            res.status(200).send(post);
        } catch (error) {
            logger.error('Erro no updatePost do PostController:', error);
            res.status(400).send(constantsConfig.POSTS.MESSAGES.ERROR.ERROR400);
        }
        
    }

    async deletePost(req: express.Request, res: express.Response) {
        try {
            const post = await deletePostUsecase.execute({
                idPost: Number(req.params.idPost)
            });
            res.status(204).send();
        } catch (error) {
            logger.error('Erro no deletePost do PostController:', error);
            res.status(500).send(constantsConfig.POSTS.MESSAGES.ERROR.ERROR500);
        }
        
    }
}

export default new PostsController();