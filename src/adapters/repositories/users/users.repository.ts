import { IUserRepository } from "../../../domain/repositories/users/users.repository.interface";
import * as Sequelize from 'sequelize';
import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
import { IUserEntity } from "../../../domain/entities/users/user.entity";
import userModelsToEntitiesMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/users/user.modelsToEntities.mysql.database";
import userEntitiesToModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/users/user.entitiesToModels.mysql.database";
import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";
import usersModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/models/users.models.mysql.database";


export class UsersRepository implements IUserRepository {

    constructor(
        private _database: IDatabaseModel,
        private _ModelUsers: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {}

    async readById(reourceId: number): Promise<IUserEntity | undefined> {
        try {
            const user = await this._database.read(this._ModelUsers, reourceId);
            return userModelsToEntitiesMysqlDatabase(user);
        }
        catch(err) {
            throw new Error((err as Error).message);
        }
    }

    async create(resource: IUserEntity): Promise<IUserEntity> {
        const user = userEntitiesToModelsMysqlDatabase(resource);
        const modelUser = await this._database.create(this._ModelUsers, user);
        resource.idUser = modelUser.null;
        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._ModelUsers, {idUser: resourceId});
    }

    async list(): Promise<IUserEntity[]> {
        const users = await this._database.list(this._ModelUsers);
        const userList = users.map(userModelsToEntitiesMysqlDatabase);
        return userList;
    }

    async updateById(resource: IUserEntity): Promise<IUserEntity | undefined> {
        let modelUser = await this._database.read(this._ModelUsers, resource.idUser!);
        const userUpdate = userEntitiesToModelsMysqlDatabase(resource);
        await this._database.update(modelUser, userUpdate);
        return resource;
    }

}

export default new UsersRepository(
    MysqlDatabase.getInstance(),
    usersModelsMysqlDatabase
)