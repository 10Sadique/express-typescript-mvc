import {Request, Response} from "express";
import products from "../../models/products.model";
const getProducts = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        products
    })
}

export default getProducts;