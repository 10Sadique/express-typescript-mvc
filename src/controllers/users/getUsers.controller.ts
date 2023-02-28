import {Request, Response} from "express";
import users from "../../models/users.model";

const getusers = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        users
    });
}

export default getusers;