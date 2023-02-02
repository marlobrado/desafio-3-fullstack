import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const deleteUserService = async (id: string): Promise<void | Array<string | number>> => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({id})
    if(!findUser){
        return ["user not found", 404]
    }

    await userRepository.delete(id);
};

export default deleteUserService;
