import postRepository from "../../../adapters/repositories/posts/post.repository";
import { IPostEntity } from "../../entities/posts/post.entity";
import { IPostRepository } from "../../repositories/posts/posts.repository.interface";
import { IUseCase } from "../usecase.interface";

class ListPostUseCase implements IUseCase {

    constructor(private _repository: IPostRepository) {}

    async execute(): Promise<IPostEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListPostUseCase(
    postRepository
)