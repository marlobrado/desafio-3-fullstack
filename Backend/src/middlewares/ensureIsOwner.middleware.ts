import { NextFunction, Request, Response } from "express"


const ensuereIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction)=>{

    const { id } = req.user
    const { id: parmsId } = req.params

    if (id === parmsId) {
        return next();
    }
    if (id !== parmsId){
        return res.status(401).json({ message: "Unauthorized" })
    }
}
export default ensuereIsOwnerMiddleware