import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contacts.interfaces";

const updateContactService = async (data: IContactUpdate, id: string) => {
    
    
    const contactsRepository = AppDataSource.getRepository(Contact);
    const contact = await contactsRepository.findOne({where: { id }})
    console.log(contact)
    if (!contact) {
        throw new AppError("User not found", 404);
    }
    const updatedContact = await contactsRepository.save({ ...contact, ...data });
    return updatedContact;
};

export default updateContactService