import { IUserRepository } from "../../../domain/repositories/users/users.repository.interface";
import * as Sequelize from 'sequelize';
import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
import { IUserEntity } from "../../../domain/entities/users/user.entity";
import userModelsToEntities from "../../../infrastructure/persistence/mysql/helpers/users/user.modelsToEntities.mysql.database";
import userEntitiesToModels from "../../../infrastructure/persistence/mysql/helpers/users/user.entitiesToModels.mysql.database";
import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";
import usersModels from "../../../infrastructure/persistence/mysql/models/users.models.mysql.database";
import logger from "../../../infrastructure/logs/winston.logs";


export class UsersRepository implements IUserRepository {

    constructor(
        private _database: IDatabaseModel,
        private _ModelUsers: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {}

    async readById(reourceId: number): Promise<IUserEntity | undefined> {
        try {
            const userOne = await this._database.read(this._ModelUsers, reourceId);
            logger.info(`Executado readById do UsersRepository.`);
            return userModelsToEntities(userOne);
        }
        catch(error) {
            logger.error('Erro no readById do UsersRepository:', error);
            throw new Error((error as Error).message);
        }
    }

    async create(resource: IUserEntity): Promise<IUserEntity> {
        try {
            const { userOne } = userEntitiesToModels(resource);
            const modelUser = await this._database.create(this._ModelUsers, userOne);
            resource.idUser = modelUser.null;
            logger.info(`Executado create do UsersRepository.`);
            return modelUser;
        } catch (error) {
            logger.error('Erro no readById do UsersRepository:', error);
            throw new Error((error as Error).message);
        }
        
    }

    async deleteById(resourceId: number): Promise<void> {
        try {
            await this._database.delete(this._ModelUsers, {idUser: resourceId});
            logger.info(`Executado deleteById do UsersRepository.`);
        } catch (error) {
            logger.error('Erro no deleteById do UsersRepository:', error);
            throw new Error((error as Error).message);
        }
        
    }

    async list(): Promise<IUserEntity[]> {
        try {
            const users = await this._database.list(this._ModelUsers);
            const userList = users.map(userModelsToEntities);
            logger.info(`Executado create do UsersRepository.`);
            return userList;
        } catch (error) {
            logger.error('Erro no list do UsersRepository:', error);
            throw new Error((error as Error).message);
        }
        
    }

    async updateById(resource: IUserEntity): Promise<IUserEntity | undefined> {
        try {
            let modelUser = await this._database.read(this._ModelUsers, resource.idUser!);
            const { userOne } = userEntitiesToModels(resource);
            await this._database.update(modelUser, userOne);
            logger.info(`Executado updateById do UsersRepository.`);
            return resource;
        } catch (error) {
            logger.error('Erro no updateById do UsersRepository:', error);
            throw new Error((error as Error).message);
        }
        
    }

}

export default new UsersRepository(
    MysqlDatabase.getInstance(),
    usersModels
)