import express from "express";
import { addProduct, getProductById, getProducts, removeProduct, updateProduct } from "../controllers/productControllers.js";
import { notAllowed } from "../utils/shareFunc.js";
import { updateFile, validFile } from "../middlewares/validFile.js";
import { adminCheck, checkUser } from "../middlewares/userCheck.js";

const router = express.Router();

router.route('/').get(getProducts).post(checkUser, validFile, addProduct).all(notAllowed);

router.route('/:id').get(getProductById).patch(checkUser, adminCheck, updateFile, updateProduct).delete(checkUser, adminCheck, removeProduct).all(notAllowed);

export default router;




