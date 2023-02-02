
import { Request, Response } from "express";
import createContactsServices from "../services/contacts/createContacts.services";
import deleteContactsService from "../services/contacts/deleteContacts.services";
import listUserContactsService from "../services/contacts/listUserContacts.servicer";
import updateContactService from "../services/contacts/updataContact.services";



const createContactsController = async (req: Request, res: Response) => {
    const contact = req.body;
    const id = req.user.id;
    const createdContact = await createContactsServices(contact, id);
    return res.status(201).json(createdContact);
};

const listContactsController = async (req: Request, res: Response)=>{
    const id = req.user.id
    const contacts = await listUserContactsService(id)
    return res.json(contacts)
}

const deleteContactsController = async (req: Request, res: Response)=>{
    const {id} = req.params
    const contactDeleted = await deleteContactsService(id)
    return res.status(204).send()
}

const updateContactsController = async (req: Request, res: Response)=>{
    const data = req.body
    const id = req.params.id
    const updateContacts = await updateContactService(data, id)
    return res.json(updateContacts)
}




export { createContactsController, listContactsController, deleteContactsController,updateContactsController };
