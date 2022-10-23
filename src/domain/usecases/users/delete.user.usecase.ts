import usersRepository from "../../../adapters/repositories/users/users.repository";
import { IUserRepository } from "../../repositories/users/users.repository.interface";
import { IUseCase } from "../usecase.interface";

class DeleteUserUseCase implements IUseCase {
    
    constructor(private _repository: IUserRepository) {}

    async execute(data: { idUser: number}): Promise<void> {
        return await this._repository.deleteById(data.idUser);
    }
}

export default new DeleteUserUseCase(
    usersRepository
)