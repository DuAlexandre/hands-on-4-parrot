import express from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import logger from '../../../../infrastructure/logs/winston.logs';

class AuthMiddleware {
    async checkAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const token = req.header(`Authorization`)?.replace(`Bearer`, ``);

            if(!token){
                res.status(401).send({
                    error: `Usuario nao autenticado.`
                });
            } else {
                const decoded = jwt.verify(token, String(process.env.SECRET_KEY));
                if(typeof decoded == `string`){
                    res.status(401).send({
                        error: `Usuario nao autenticado.`
                    });
                } else {
                    console.log(decoded.indexId);
                    next();
                }
            }


        } catch (error) {
            logger.error("Erro no authMiddleware", error);
            res.status(401).send({
                error: `Usuario nao autenticado.`
            });
        }
    }
}

export default new AuthMiddleware();