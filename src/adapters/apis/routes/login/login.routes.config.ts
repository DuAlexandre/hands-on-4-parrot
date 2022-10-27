import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import loginController from "../../controllers/login/login.controller";

export class LoginRoutes extends CommonRoutesConfig {
    
    constructor(app: express.Application) {
        super(app, 'LoginRoutes');
    }

    configureRoutes(): express.Application {
        
        this.app.route('/login')
            .post(loginController.loginByEmail)

        return this.app
    }
}