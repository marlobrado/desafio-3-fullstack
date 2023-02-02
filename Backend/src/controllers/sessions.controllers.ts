import { Request, Response } from "express"
import { ISessionRequest } from "../interfaces/sessions.interface"
import createSessionService from "../services/sessions/createSessions.services"

const createSessionController = async (req: Request, res: Response)=>{
    try {
        const data: ISessionRequest = req.body
        const token = await createSessionService(data)
        return res.json({token})
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}
export default createSessionController