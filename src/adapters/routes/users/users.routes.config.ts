import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('Lista de usuários');
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(201).send('Cadastrar um Usuário');
            });
        
        this.app.route(`/users/:id`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`Procura usuário por id ${req.params.id}`)
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`Atualiza usuário por id ${req.params.id}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(204).send(`Deleta usuário por id ${req.params.id}`)
            })

        return this.app;
    }
}