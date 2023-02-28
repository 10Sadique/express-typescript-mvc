import {Router} from "express";
import getUsers from "./getUsers.controller";
import createUser from "./createUser.controller";
import addUser from "./addUser.controller";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/add', addUser);

export default router;