import express, {Express} from "express";
import UserRoute from "./routes/users";
import cors from 'cors';
import ProductRoute from "./routes/products";

class ExpressAPP {
    public app: Express;
    constructor() {
        this.app = express();
        this.applicationInt();
        this.UserRoute();
        this.ProductRoute();
    }

    private applicationInt(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors({origin: '*'}));
    }

    private UserRoute(): void {
        this.app.use('/api/v1', new UserRoute().router);
    }

    private ProductRoute(): void {
        this.app.use('/api/v1', new ProductRoute().router);
    }
}

export default ExpressAPP;