import  express  from "express";
import debug from "debug";
import listUserUsecase from "../../../../domain/usecases/users/list.user.usecase";
import readUserUsecase from "../../../../domain/usecases/users/read.user.usecase";
import createUserUsecase from "../../../../domain/usecases/users/create.user.usecase";
import updateUserUsecase from "../../../../domain/usecases/users/update.user.usecase";
import deleteUserUsecase from "../../../../domain/usecases/users/delete.user.usecase";

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await listUserUsecase.execute();
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = await readUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const user = await createUserUsecase.execute(req.body);
        log(user);
        res.status(201).send(user);
    }

    async updateUser(req: express.Request, res: express.Response) {
        const user = await updateUserUsecase.execute(req.body);
        res.status(200).send(user);
    }

    async deleteUser(req: express.Request, res: express.Response) {
        const user = await deleteUserUsecase.execute({
            idUser: Number(req.params.idUser)
        });
        res.status(204).send();
    }
}

export default new UsersController();