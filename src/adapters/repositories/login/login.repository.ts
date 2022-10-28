import { ILoginEntity } from "../../../domain/entities/login/login.entity";
import { ILoginRepository } from "../../../domain/repositories/login/login.repository.interface";
import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
import * as Sequelize from 'sequelize';
import loginModelsToEntitiesMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/login/login.modelsToEntities.mysql.database";
import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";
import usersModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/models/users.models.mysql.database";
import logger from "../../../infrastructure/logs/winston.logs";

export class LoginRepository implements ILoginRepository {

    constructor(
        private _database: IDatabaseModel,
        private _ModelUsers: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {}

    async loginByEmail(resourceEmail: string): Promise<ILoginEntity> {
        try {
            const loginOne = await this._database.login(this._ModelUsers, resourceEmail)
            logger.info('Login realizado');
            return loginModelsToEntitiesMysqlDatabase(loginOne)
        } catch (error) {
            logger.error('Erro no login do LoginRepository:', error);
            throw new Error((error as Error).message);
        }
    }
}

export default new LoginRepository(
    MysqlDatabase.getInstance(),
    usersModelsMysqlDatabase
)