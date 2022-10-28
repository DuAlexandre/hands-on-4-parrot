import express  from "express";
import debug from "debug";
import listUserUsecase from "../../../../domain/usecases/users/list.user.usecase";
import readUserUsecase from "../../../../domain/usecases/users/read.user.usecase";
import createUserUsecase from "../../../../domain/usecases/users/create.user.usecase";
import updateUserUsecase from "../../../../domain/usecases/users/update.user.usecase";
import deleteUserUsecase from "../../../../domain/usecases/users/delete.user.usecase";
import logger from "../../../../infrastructure/logs/winston.logs";
import constantsConfig from "../../../../infrastructure/config/constants.config";
import bcrypt from 'bcrypt';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        try {
            const users = await listUserUsecase.execute();
            res.status(200).send(users);
        } catch (error) {
            logger.error('Erro no listUsers do UsersController:', error);
            res.status(404).send(constantsConfig.USERS.MESSAGES.ERROR.ERROR404);
        }
        
    }

    async getUserById(req: express.Request, res: express.Response) {
        try {
            const user = await readUserUsecase.execute({
                idUser: Number(req.params.idUser)
            });
            res.status(200).send(user);
        } catch (error) {
            logger.error('Erro no getUserById do UsersController:', error);
            res.status(404).send(constantsConfig.USERS.MESSAGES.ERROR.ERROR404);
        }
        
    }

    async createUser(req: express.Request, res: express.Response) {
        try {
            const { name, email, apartment, password, photo } = req.body;
            const EncryPassord = bcrypt.hashSync(password, 10);
            const user = await createUserUsecase.execute({ name, email, apartment, password: EncryPassord, photo });
            log(user);
            res.status(201).send(user);
        } catch (error) {
            logger.error('Erro no createUsers do UsersController:', error);
            res.status(500).send(constantsConfig.USERS.MESSAGES.ERROR.ERROR500);
        }
        
    }

    async updateUser(req: express.Request, res: express.Response) {
        try {
            const { idUser, name, email, apartment, password, photo } = req.body;
            const EncryPassord = bcrypt.hashSync(password, 10);
            let user = await updateUserUsecase.execute({ idUser, name, email, apartment, password: EncryPassord, photo });
            res.status(200).send(user);
        } catch (error) {
            logger.error('Erro no updateUser do UsersController:', error);
            res.status(400).send(constantsConfig.USERS.MESSAGES.ERROR.ERROR400);
        }
        
    }

    async deleteUser(req: express.Request, res: express.Response) {
        try {
            const user = await deleteUserUsecase.execute({
                idUser: Number(req.params.idUser)
            });
            res.status(204).send();
        } catch (error) {
            logger.error('Erro no deleteUser do UsersController:', error);
            res.status(500).send(constantsConfig.USERS.MESSAGES.ERROR.ERROR500);
        }
        
    }
}

export default new UsersController();