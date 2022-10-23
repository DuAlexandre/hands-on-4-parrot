import { IPostEntity } from "../../entities/posts/post.entity";

export interface IPostRepository {
    readById(reourceId: number): Promise<IPostEntity | undefined>,
    create(resource: IPostEntity): Promise<IPostEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<IPostEntity[]>,
    updateById(resource: IPostEntity): Promise<IPostEntity | undefined>
}