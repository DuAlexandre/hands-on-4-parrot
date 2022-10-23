import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import usersController from "../../controllers/users/users.controller";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/users`)
            .get(usersController.listUsers)
            .post(usersController.createUser);
        
        this.app.route(`/users/:id`)
            .get(usersController.getUserById)
            .put(usersController.updateUser)
            .delete(usersController.deleteUser);

        return this.app;
    }
}