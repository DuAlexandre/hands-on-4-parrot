import { IUserEntity } from "../../../../../domain/entities/users/user.entity";

export default function (user: IUserEntity) {

    const userOne = {
       idUser: user.idUser,
       name: user.name,
       email: user.email,
       apartment: user.apartment,
       password: user.password,
       photo: user.photo,
       created_at: user.created_at,
       updated_at: user.updated_at 
    }

    return { userOne: userOne };
}