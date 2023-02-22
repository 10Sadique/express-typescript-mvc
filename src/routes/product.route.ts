import express from "express";
import { saveProducts, getProducts } from "../controllers/products.controller";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", saveProducts);

export default router;
