import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users.interfaces";
import listUsersService from "../services/users/listUsers.services";
import createUserService from "../services/users/createUsers.services";
import { instanceToPlain } from "class-transformer"
import updateUserService from "../services/users/updateUser.services";
import User from "../entities/user.entity";
import deleteUserService from "../services/users/deleteUser.services";
import listRetriverUserService from "../services/users/listRetriveUser.services";

const createUserControler = async (req: Request, res: Response) =>{
    
    try {
        const user:IUserRequest = req.body
        const createdUser = await createUserService(user)
        return res.status(201).json(createdUser)
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const listUsersController = async(req: Request, res: Response) => {
    
    const users = await listUsersService()
    
    return res.json(instanceToPlain(users))
}

const updateUserController = async (req: Request, res: Response)=>{
    try {
        const user: IUserUpdate = req.body

        const id: string = req.params.id

        const updatedUser = await updateUserService(user, id)
        if(updatedUser instanceof User){
            return res.status(200).json(updatedUser)
        }

        return res.status(updatedUser[1] as number).json({message: updatedUser[0]})
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                error: error.name,
                message: error.message
            })
        }
    }
}

const deleteUserController = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params
        console.log(typeof(id))

        const userDeleted = await deleteUserService(id)
        if(userDeleted instanceof Array){
            return res.status(userDeleted[1] as number).json({message: userDeleted[0]})
        }
        return res.status(204).send()
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({message: error.message})
        }
    }
}

const listRetriverUserController = async(req: Request, res: Response) => {
    
    const { id } = req.params 

    const user = await listRetriverUserService(id)
    
    return res.json(instanceToPlain(user))
}





export {createUserControler,listUsersController,updateUserController,deleteUserController,listRetriverUserController}