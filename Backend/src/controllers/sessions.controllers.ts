import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { ISessionRequest } from "../interfaces/sessions.interface"
import createSessionService from "../services/sessions/createSessions.services"

const createSessionController = async (req: Request, res: Response)=>{
    
    const data: ISessionRequest = req.body
    const token = await createSessionService(data)
    return res.json(instanceToPlain(token))
    
}
export default createSessionController