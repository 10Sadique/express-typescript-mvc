import {Router} from "express";
import ProductsRoute from '../../controllers/products/index';

class ProductRoute {
    public router = Router();
    constructor() {
        this.router.use('/products', ProductsRoute);
    }
}

export default ProductRoute;