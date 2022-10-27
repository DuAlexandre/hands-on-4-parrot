import  express from "express";
import loginUsecase from "../../../../domain/usecases/login/login.usecase";
import constantsConfig from "../../../../infrastructure/config/constants.config";
import logger from "../../../../infrastructure/logs/winston.logs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';





class LoginController {
    async loginByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const { email, password } = req.body;
            const logUser = await loginUsecase.execute({
                email,
                password
            })
            let isMatch = bcrypt.compareSync(req.body.password, logUser.password);

            if (isMatch) {

                const token = jwt.sign(logUser, String(process.env.SECRET_KEY), {
                    expiresIn: '2 days'
                });
    

                res.status(200).send({token});
                next()
            }
            else {
                res.status(401).send("Senha ou email inválido, tente novamente") 
            }
        } catch (error) {
            logger.error('Erro no login do LoginController:', error);
            res.status(500).send(constantsConfig.USERS.MESSAGES.ERROR.ERROR500);
        }
    }
}

export default new LoginController();