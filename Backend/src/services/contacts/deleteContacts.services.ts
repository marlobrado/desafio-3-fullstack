import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const deleteContactsService = async (id: string) => {
    const contactRepository = AppDataSource.getRepository(Contact);

    const findContact = await contactRepository.findOneBy({id: id})
    
    if(!findContact){
        throw new AppError('user not found', 404)
    }

    await contactRepository.delete(id);
};
export default deleteContactsService;
