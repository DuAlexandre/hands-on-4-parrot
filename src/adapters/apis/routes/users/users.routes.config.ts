import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import usersController from "../../controllers/users/users.controller";
import usersMiddleware from "../../middlewares/users/users.middleware";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/users`)
            .get(usersController.listUsers)
            .post(
                usersMiddleware.createValidator,
                usersController.createUser
                );
        
        this.app.route(`/users/:idUser`)
            .get(
                usersMiddleware.idValidator,
                usersController.getUserById
                )
            .put(
                usersMiddleware.idValidator,
                usersMiddleware.updateValidator,
                usersController.updateUser
                )
            .delete(
                usersMiddleware.idValidator,
                usersController.deleteUser
                );

        return this.app;
    }
}