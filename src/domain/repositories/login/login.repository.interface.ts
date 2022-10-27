import { ILoginEntity } from "../../entities/login/login.entity";

export interface ILoginRepository {
    loginByEmail(resourceEmail: string, resourcePass: string): Promise<ILoginEntity>
}