import postRepository from "../../../adapters/repositories/posts/post.repository";
import { IPostEntity } from "../../entities/posts/post.entity";
import { IPostRepository } from "../../repositories/posts/posts.repository.interface";
import { IUseCase } from "../usecase.interface";

class UpdatePostUseCase implements IUseCase {

    constructor (private _repository: IPostRepository) {}

    async execute(data: IPostEntity): Promise<IPostEntity | undefined> {
        return await this._repository.updateById(data);
    }
}
export default new UpdatePostUseCase(
    postRepository
)