import AppDataSource from "../../data-source"
import User from "../../entities/user.entity"

const listUsersService = async (): Promise<User[]> =>{
    
    const userRepository =  AppDataSource.getRepository(User)

    const users = await userRepository.find({ relations: { contacts: true } })

    return users

}

export default listUsersService