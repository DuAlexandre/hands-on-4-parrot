import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import usersController from "../../controllers/users/users.controller";
import usersMiddleware from "../../middlewares/users/users.middleware";
import authMiddleware from "../../middlewares/auth/auth.middlewares";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/users`)
            .get(
                authMiddleware.checkAuth,
                usersController.listUsers
                )
            .post(
                usersMiddleware.createValidator,
                usersController.createUser
                );
        
        this.app.route(`/users/:idUser`)
            .get(
                authMiddleware.checkAuth,
                usersMiddleware.idValidator,
                usersController.getUserById
                )
            .put(
                authMiddleware.checkAuth,
                usersMiddleware.idValidator,
                usersMiddleware.updateValidator,
                usersController.updateUser
                )
            .delete(
                authMiddleware.checkAuth,
                usersMiddleware.idValidator,
                usersController.deleteUser
                );

        return this.app;
    }
}