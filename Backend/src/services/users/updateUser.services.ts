import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users.interfaces";



const updateUserService = async ({ email, password,fullName, telphone}: IUserUpdate, id: string): Promise<User | Array<string | number>>=>{
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id})
    if(!findUser){
        return ["user not found", 404]
    }

    await userRepository.update(
        id,
        {
            fullName: fullName ? fullName : findUser.fullName,
            email: email ? email : findUser.email,
            telphone: telphone ? telphone : findUser.telphone,
            password: password ? await hash(password, 10) : findUser.password
        }
    )
    const user = await userRepository.findOneBy({id})

    return user!
}



export default updateUserService