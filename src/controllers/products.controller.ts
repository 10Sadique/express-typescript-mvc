import { Request, Response } from "express";
import path from "path";
import products from "../models/products.model";

export const getProducts = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + "/../views/product.html"));
};

export const saveProducts = (req: Request, res: Response) => {
    const name = req.body.name;
    const price = Number(req.body.price);

    const product = {
        name,
        price,
    };

    console.log(product);

    products.push(product);

    res.status(201).json({
        success: true,
        products,
    });
};
