import express from 'express';
import debug from 'debug';
import { error } from 'winston';

const log: debug.IDebugger = debug('app:users-middleware');

class UsersMiddleware {

    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if(req.body !== undefined) {
            next();
        }
        else {
            res.status(400).send(error)
        }
    }
}