import {Request, Response} from "express";
import users from "../../models/users.model";

const createUser = (req: Request, res: Response) => {
    console.log(req.body);
    const name: string = req.body.name;
    const age: number = Number(req.body.age);

    const user = {
        name,
        age
    };

    users.push(user);

    res.status(201).json({
        success: true,
        users
    });

}

export default createUser;