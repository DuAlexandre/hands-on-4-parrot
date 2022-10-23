import { IUserEntity } from "../../entities/users/user.entity";
import { IUserRepository } from "../../repositories/users/users.repository.interface";
import { IUseCase } from "../usecase.interface";

class ReadUserUseCase implements IUseCase {

    constructor (private _repository: IUserRepository) {}

    async execute(data: {userId: number}): Promise<IUserEntity | undefined> {
        return await this._repository.readById(data.userId);
    }
}