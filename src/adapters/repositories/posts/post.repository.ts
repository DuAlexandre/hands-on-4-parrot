 import { IPostRepository } from "../../../domain/repositories/posts/posts.repository.interface";
 import * as Sequelize from 'sequelize';
import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
 import { IPostEntity } from "../../../domain/entities/posts/post.entity";
 import postModelsToEntitiesMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/posts/post.modelsToEntities.mysql.database";
 import postEntitiesToModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/posts/post.entitiesToModels.mysql.database";
 import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";
 import postsModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/models/posts.models.mysql.database";

export class PostRepository implements IPostRepository {

    constructor(
        private _database: IDatabaseModel,
        private _ModelPosts: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {}

    async readById(reourceId: number): Promise<IPostEntity | undefined> {
        try {
            const post = await this._database.read(this._ModelPosts, reourceId);
            return postModelsToEntitiesMysqlDatabase(post);
        }
        catch(err) {
            throw new Error((err as Error).message);
        }
    }

    async create(resource: IPostEntity): Promise<IPostEntity> {
        const post = postEntitiesToModelsMysqlDatabase(resource);
        const modelPost = await this._database.create(this._ModelPosts, post);
        resource.idPost = modelPost.null;
        return resource;
    }

    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._ModelPosts, {idPost: resourceId});
    }

    async list(): Promise<IPostEntity[]> {
        const posts = await this._database.list(this._ModelPosts);
        const postList = posts.map(postModelsToEntitiesMysqlDatabase);
        return postList;
    }

    async updateById(resource: IPostEntity): Promise<IPostEntity | undefined> {
        let modelPost = await this._database.read(this._ModelPosts, resource.idPost!);
        const postUpdate = postEntitiesToModelsMysqlDatabase(resource);
        await this._database.update(modelPost, postUpdate);
        return resource;
    }
    
}

export default new PostRepository(
    MysqlDatabase.getInstance(),
    postsModelsMysqlDatabase
)