import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users.interfaces";
import listUsersService from "../services/users/listUsers.services";
import createUserService from "../services/users/createUsers.services";
import { instanceToPlain } from "class-transformer"
import updateUserService from "../services/users/updateUser.services";

import deleteUserService from "../services/users/deleteUser.services";
import listRetriverUserService from "../services/users/listRetriveUser.services";

const createUserControler = async (req: Request, res: Response) =>{
    
    const user:IUserRequest = req.body
    const createdUser = await createUserService(user)
    return res.status(201).json(createdUser)

}

const listUsersController = async(req: Request, res: Response) => {
    
    const users = await listUsersService()
    return res.json(instanceToPlain(users))
}

const updateUserController = async (req: Request, res: Response)=>{
    
    const user: IUserUpdate = req.body
    const id: string = req.params.id
    const updatedUser = await updateUserService(user, id)
    return res.json(updatedUser)
}

const deleteUserController = async (req: Request, res: Response)=>{
    
    const { id } = req.params
    const userDeleted = await deleteUserService(id)
    return res.status(204).send()
}

const listRetriverUserController = async(req: Request, res: Response) => {
    
    const { id } = req.params 
    const user = await listRetriverUserService(id)
    return res.json(instanceToPlain(user))
}


export {createUserControler,listUsersController,updateUserController,deleteUserController,listRetriverUserController}