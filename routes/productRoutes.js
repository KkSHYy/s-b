import express from "express";
import { getProducts } from "../controllers/productControllers.js";
import { notAllowed } from "../utils/shareFunc.js";

const router = express.Router();

router.route('/').get(getProducts).all(notAllowed);

export default router;




