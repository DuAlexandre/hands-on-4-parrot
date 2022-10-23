import { IPostRepository } from "../../repositories/posts/posts.repository.interface";
import { IUseCase } from "../usecase.interface";

class DeletePostUseCase implements IUseCase {

    constructor(private _repository: IPostRepository) {}

    async execute(data: {postId: number}): Promise<void> {
        return await this._repository.deleteById(data.postId);
    }
}