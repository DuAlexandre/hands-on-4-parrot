import { IPostEntity } from "../../entities/posts/post.entity";
import { IPostRepository } from "../../repositories/posts/posts.repository.interface";
import { IUseCase } from "../usecase.interface";

class ReadPostUseCase implements IUseCase {

    constructor (private _repository: IPostRepository) {}

    async execute(data: {postId: number}): Promise<IPostEntity | undefined> {
        return await this._repository.readById(data.postId);
    }
}