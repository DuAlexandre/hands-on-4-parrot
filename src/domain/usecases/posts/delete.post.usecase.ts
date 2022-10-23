import postRepository from "../../../adapters/repositories/posts/post.repository";
import { IPostRepository } from "../../repositories/posts/posts.repository.interface";
import { IUseCase } from "../usecase.interface";

class DeletePostUseCase implements IUseCase {

    constructor(private _repository: IPostRepository) {}

    async execute(data: {idPost: number}): Promise<void> {
        return await this._repository.deleteById(data.idPost);
    }
}

export default new DeletePostUseCase(
    postRepository
)