import { ILoginEntity } from "../../../../../domain/entities/login/login.entity";
import { IUserEntity } from "../../../../../domain/entities/users/user.entity";

export default function (login: any): ILoginEntity {

    let loginOne: ILoginEntity = {
        email: login.email,
        password: login.password,
    }

    return (loginOne as ILoginEntity)
}