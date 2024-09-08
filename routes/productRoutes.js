import express from "express";
import { addProduct, getProducts } from "../controllers/productControllers.js";
import { notAllowed } from "../utils/shareFunc.js";
import { validFile } from "../middlewares/validFile.js";
import { checkUser } from "../middlewares/userCheck.js";

const router = express.Router();

router.route('/').get(getProducts).post(checkUser, validFile, addProduct).all(notAllowed);

// router.route('/:id').get(getProducts).post(validFile, addProduct).all(notAllowed);

export default router;




