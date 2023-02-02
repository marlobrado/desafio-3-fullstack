import { Router } from "express";
import { createContactsController, deleteContactsController, listContactsController, updateContactsController } from "../controllers/contacts.controllers";
import isValidContactUpdateMiddleware from "../middlewares/isValidContactUpdate.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

import isValidUUIDMiddleware from "../middlewares/isValidUUID.middleware";

const contactRouter = Router()
contactRouter.post('', ensureAuthMiddleware, createContactsController)
contactRouter.get('', ensureAuthMiddleware, listContactsController)
contactRouter.delete('/:id',ensureAuthMiddleware, isValidUUIDMiddleware, deleteContactsController)
contactRouter.patch('/:id',ensureAuthMiddleware, isValidContactUpdateMiddleware, isValidUUIDMiddleware, updateContactsController)
export default contactRouter