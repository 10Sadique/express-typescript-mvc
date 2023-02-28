import express, {Router} from "express";
import UsersRoute from '../../controllers/users/index';

class UserRoute {
    public router = Router();

    constructor() {
        this.router.use('/users', UsersRoute);
    }
}

export default UserRoute;