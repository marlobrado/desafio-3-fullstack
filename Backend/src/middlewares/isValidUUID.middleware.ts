import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const isValidUUIDMiddleware = async(req: Request, res: Response, next:NextFunction)=>{
    const id = req.params.id
    if(id.length !== 36){
        throw new AppError('Invalid UUID, must be 36 characters', 400)
    }
    
    return next()
}

export default isValidUUIDMiddleware