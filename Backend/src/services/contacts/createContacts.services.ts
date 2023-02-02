import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contacts.interfaces";

const createContactsServices = async (
    { email, name, telephone }: IContactRequest,
    userId: string
): Promise<Contact> => {
    const userRepository = AppDataSource.getRepository(User);
    const contactsRepository = AppDataSource.getRepository(Contact);

    const user = await userRepository.findOneBy({ id: userId });

    
    const contact = contactsRepository.create({
        name,
        email,
        telephone,
        user: user!
    })

    await contactsRepository.save(contact)

    const findConctact = await contactsRepository.findOneBy({
        id: contact.id,
    });
    
    return findConctact!
};

export default createContactsServices;
