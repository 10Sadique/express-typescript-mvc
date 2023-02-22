import { Request, Response } from "express";
import users from "../models/users.model";
import path from "path";

export const getUsers = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};

export const createUser = (req: Request, res: Response) => {
    const name = req.body.name;
    const age = Number(req.body.age);

    const user = {
        name,
        age,
    };

    console.log(user);

    users.push(user);

    res.status(201).json({
        success: true,
        users,
    });
};
