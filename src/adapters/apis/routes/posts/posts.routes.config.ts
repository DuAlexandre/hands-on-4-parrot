import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import postsController from "../../controllers/posts/posts.controller";
import postsMiddleware from "../../middlewares/posts/posts.middleware";

export class PostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        
        this.app.route(`/posts`)
            .get(postsController.listPosts)
            .post(
                postsMiddleware.createValidator,
                postsController.createPost
                );

        this.app.route(`/posts/:idPost`)
            .get(
                postsMiddleware.idValidator,
                postsController.getPostById
                )
            .put(
                postsMiddleware.idValidator,
                postsMiddleware.updateValidator,
                postsController.updatePost
                )
            .delete(
                postsMiddleware.idValidator,
                postsController.deletePost
                );

        return this.app;
    }
}