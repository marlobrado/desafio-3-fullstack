import { Router } from "express";
import { createUserControler, deleteUserController, listRetriverUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensuereIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";

const userRoutes = Router()

userRoutes.post('', createUserControler)
userRoutes.get('',ensureAuthMiddleware , listUsersController)
userRoutes.get('/:id',ensureAuthMiddleware, ensuereIsOwnerMiddleware, listRetriverUserController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)



export default userRoutes
