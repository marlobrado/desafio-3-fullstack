import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string): Promise<void | Array<string | number>> => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({id: id})
    if(!findUser){
        throw new AppError('user not found', 404)
    }

    await userRepository.delete(id);
};

export default deleteUserService;
