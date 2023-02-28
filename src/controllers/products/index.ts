import {Router} from "express";
import addProduct from "./addProduct.controller";
import createProduct from "./createProduct.controller";
import getProducts from "./getProducts.controller";

const router = Router();

router.get('/add', addProduct);
router.post('/', createProduct);
router.get('/', getProducts)

export default router;