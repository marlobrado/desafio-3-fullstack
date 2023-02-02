import { ISessionRequest } from "../../interfaces/sessions.interface";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { compare } from "bcrypt";

const createSessionService = async ({
    email,
    password,
}: ISessionRequest): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ email: email });
    
    if (!user) {
        throw new Error("Invalid email or password");
    }

    if (!user.password) {
        throw new Error("Invalid email or password");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        { email: user.email },
        process.env.SECRET_KEY as string,
        {
            expiresIn: "72h",
            subject: user.id,
        }
    );

    return token;
};
export default createSessionService;
