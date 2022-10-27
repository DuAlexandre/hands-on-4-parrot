import loginRepository from "../../../adapters/repositories/login/login.repository";
import { ILoginEntity } from "../../entities/login/login.entity";
import { ILoginRepository } from "../../repositories/login/login.repository.interface";
import { IUseCase } from "../usecase.interface";




class LoginUseCase implements IUseCase {
    constructor (private _repository: ILoginRepository) {}

    async execute(data: {email: string, password: string}): Promise<ILoginEntity> {
        return await this._repository.loginByEmail(data.email, data.password)
    }
}

export default new LoginUseCase(
    loginRepository
)