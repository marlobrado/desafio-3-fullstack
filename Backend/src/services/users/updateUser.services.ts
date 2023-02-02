import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users.interfaces";



const updateUserService = async ({ email, password,fullName, telephone}: IUserUpdate, id: string): Promise<User | Array<string | number>>=>{
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id})
    if(!findUser){
        throw new AppError('user not found', 404)

    }

    await userRepository.update(
        id,
        {
            fullName: fullName ? fullName : findUser.fullName,
            email: email ? email : findUser.email,
            telephone: telephone ? telephone : findUser.telephone,
            password: password ? await hash(password, 10) : findUser.password
        }
    )
    const user = await userRepository.findOneBy({id})

    return user!
}



export default updateUserService