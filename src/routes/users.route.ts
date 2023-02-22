import express from "express";
import { createUser, getUsers } from "../controllers/users.controller";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);

export default router;