import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";

const createUserService = async ({
    fullName,
    email,
    password,
    telephone,
}: IUserRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);

    const emailVerify = await userRepository.findOneBy({ email });

    if (emailVerify) {
        throw new AppError('Email already exists', 400)
    }

    if (!password) {
        throw new AppError('Password is missing');
    }
    const hashedPassword = await hash(password, 10);

    const user = userRepository.create({
        fullName,
        email,
        password: hashedPassword,
        telephone,
    });

    await userRepository.save(user);

    return user;
};
export default createUserService;
