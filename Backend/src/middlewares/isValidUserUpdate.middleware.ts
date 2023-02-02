import { Request, Response, NextFunction } from "express";

const isValidUserUpdateMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const allowedKeys = ["name", "telephone", "email", "password"];
    const dataKeys = Object.keys(req.body);
    const isValid = dataKeys.every((key) => allowedKeys.includes(key));

    if (!isValid) {
        return res.status(400).json({
            message: `Invalid key, can only update ${allowedKeys}`
        });
    }

    next();
};

export default isValidUserUpdateMiddleware;
