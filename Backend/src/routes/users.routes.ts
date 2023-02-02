import { Router } from "express";
import { createUserControler, deleteUserController, listRetriverUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensuereIsOwnerMiddleware from "../middlewares/ensureIsOwner.middleware";
import isValidUUIDMiddleware from "../middlewares/isValidUUID.middleware";

const userRoutes = Router()

userRoutes.post('', createUserControler)
userRoutes.get('',ensureAuthMiddleware, listUsersController)
userRoutes.get('/user',ensureAuthMiddleware, listRetriverUserController)
userRoutes.patch('/:id',ensureAuthMiddleware, ensuereIsOwnerMiddleware, isValidUUIDMiddleware, updateUserController)
userRoutes.delete('/:id',ensureAuthMiddleware, ensuereIsOwnerMiddleware, deleteUserController)

export default userRoutes
