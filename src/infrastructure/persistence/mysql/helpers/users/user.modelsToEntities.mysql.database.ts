import { IUserEntity } from "../../../../../domain/entities/users/user.entity";

export default function (user: any): IUserEntity | undefined {
    
    if(!user) {
        return;
    }

    let userOne: IUserEntity = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        password: user.password,
        photo: user.photo
    }
    
    return (userOne as IUserEntity)
}