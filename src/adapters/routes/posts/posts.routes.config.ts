import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';

export class PostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        
        this.app.route(`/posts`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send('Lista de postagens');
        })
        .post((req: express.Request, res: express.Response) => {
            res.status(201).send('Criar uma postagem');
        })

        this.app.route(`/posts/:id`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`Procura postagem por id ${req.params.id}`)
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`Atualiza postagem por id ${req.params.id}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(204).send(`Deleta postagem por id ${req.params.id}`)
            })

        return this.app;
    }
}