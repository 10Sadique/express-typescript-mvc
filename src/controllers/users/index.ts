import {Router} from "express";
import getUsers from "./getUsers.controller";
import createUser from "./createUser.controller";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser)

export default router;