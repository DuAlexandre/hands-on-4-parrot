 import { IPostRepository } from "../../../domain/repositories/posts/posts.repository.interface";
 import * as Sequelize from 'sequelize';
import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
 import { IPostEntity } from "../../../domain/entities/posts/post.entity";
 import postModelsToEntitiesMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/posts/post.modelsToEntities.mysql.database";
 import postEntitiesToModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/posts/post.entitiesToModels.mysql.database";
 import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";
 import postsModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/models/posts.models.mysql.database";
 import logger from "../../../infrastructure/logs/winston.logs";

export class PostRepository implements IPostRepository {

    constructor(
        private _database: IDatabaseModel,
        private _ModelPosts: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {}

    async readById(reourceId: number): Promise<IPostEntity | undefined> {
        try {
            const postOne = await this._database.read(this._ModelPosts, reourceId);
            logger.info(`Executado readById do PostRepository.`);
            return postModelsToEntitiesMysqlDatabase(postOne);
        }
        catch(error) {
            logger.error('Erro no readById do PostRepository:', error);
            throw new Error((error as Error).message);
        }
    }

    async create(resource: IPostEntity): Promise<IPostEntity> {
        try {
            const { postOne } = postEntitiesToModelsMysqlDatabase(resource);
            const modelPost = await this._database.create(this._ModelPosts, postOne);
            resource.idPost = modelPost.null;
            logger.info(`Executado create do PostRepository.`);
            return modelPost;
        } catch (error) {
            logger.error('Erro no create do PostRepository:', error);
            throw new Error((error as Error).message);
        }
        
    }

    async deleteById(resourceId: number): Promise<void> {
        try {
            await this._database.delete(this._ModelPosts, {idPost: resourceId});
            logger.info(`Executado deleteById do PostRepository.`);
        } catch (error) {
            logger.error('Erro no deleteById do PostRepository:', error);
            throw new Error((error as Error).message);
        }
        
    }

    async list(): Promise<IPostEntity[]> {
        try {
            const posts = await this._database.list(this._ModelPosts);
            const postList = posts.map(postModelsToEntitiesMysqlDatabase);
            logger.info(`Executado list do PostRepository.`);
            return postList;
        } catch (error) {
            logger.error('Erro no list do PostRepository:', error);
            throw new Error((error as Error).message);
        }
       
    }

    async updateById(resource: IPostEntity): Promise<IPostEntity | undefined> {
        try {
            let modelPost = await this._database.read(this._ModelPosts, resource.idPost!);
            const { postOne } = postEntitiesToModelsMysqlDatabase(resource);
            await this._database.update(modelPost, postOne);
            logger.info(`Executado updateById do PostRepository.`);
            return resource;
        } catch (error) {
            logger.error('Erro no updateById do PostRepository:', error);
            throw new Error((error as Error).message);
        }
        
    }
    
}

export default new PostRepository(
    MysqlDatabase.getInstance(),
    postsModelsMysqlDatabase
)