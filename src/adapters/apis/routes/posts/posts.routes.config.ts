import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import postsController from "../../controllers/posts/posts.controller";

export class PostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        
        this.app.route(`/posts`)
            .get(postsController.listPosts)
            .post(postsController.createPost);

        this.app.route(`/posts/:id`)
            .get(postsController.getPostById)
            .put(postsController.updatePost)
            .delete(postsController.deletePost);

        return this.app;
    }
}