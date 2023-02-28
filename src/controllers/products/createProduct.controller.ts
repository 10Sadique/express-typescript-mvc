import {Request, Response} from "express";
import products from "../../models/products.model";

const createProduct = (req: Request, res: Response) => {
    const name: string = req.body.name;
    const price: number = Number(req.body.price);

    const product = {
        name,
        price
    }

    products.push(product);

    res.status(201).json({
        success: true,
        products
    })

}

export default createProduct;