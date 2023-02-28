import {Request, Response} from "express";
import path from "path";

const addProduct = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/../../views/product.html'));
}

export default addProduct;