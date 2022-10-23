import usersRepository from "../../../adapters/repositories/users/users.repository";
import { IUserEntity } from "../../entities/users/user.entity";
import { IUserRepository } from "../../repositories/users/users.repository.interface";
import { IUseCase } from "../usecase.interface";


export class CreateUserUseCase implements IUseCase {

    constructor(private _repository: IUserRepository) {}

    async execute(data: IUserEntity): Promise<IUserEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateUserUseCase(
    usersRepository
)

