import AppDataSource from "../../data-source"
import User from "../../entities/user.entity"

const listRetriverUserService = async (id: string): Promise<User> =>{
    
    const userRepository =  AppDataSource.getRepository(User)

    
    const user = await userRepository.findOneBy({
        id: id
    })
    
    if(!user){
        throw new Error("user not found")
    }

    return user

}

export default listRetriverUserService