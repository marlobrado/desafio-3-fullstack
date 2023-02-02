import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";

const createUserService = async ({
    fullName,
    email,
    password,
    telphone,
}: IUserRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);

    const emailVerify = await userRepository.findOneBy({ email });

    if (emailVerify) {
        throw new Error("Email already exists");
    }

    if (!password) {
        throw new Error("Password is missign");
    }
    const hashedPassword = await hash(password, 10);

    const user = userRepository.create({
        fullName,
        email,
        password: hashedPassword,
        telphone,
    });

    await userRepository.save(user);

    return user;
};
export default createUserService;
