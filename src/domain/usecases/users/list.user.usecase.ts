import usersRepository from "../../../adapters/repositories/users/users.repository";
import { IUserEntity } from "../../entities/users/user.entity";
import { IUserRepository } from "../../repositories/users/users.repository.interface";
import { IUseCase } from "../usecase.interface";

class ListUserUseCase implements IUseCase {

    constructor(private _repository: IUserRepository) {}

    async execute(): Promise<IUserEntity[] | undefined> {
        return await this._repository.list();
    }
}

export default new ListUserUseCase(
    usersRepository
)