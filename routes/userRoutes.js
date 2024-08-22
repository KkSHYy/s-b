import express from "express";
import { getAllUsers, loginUser } from "../controllers/userControllers.js";
import { notAllowed } from "../utils/shareFunc.js";
import Joi from "joi";
import expressJoi from "express-joi-validation";

const router = express.Router();

const validatior = expressJoi.createValidator({});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(50).required()
});

router.route('/').get(getAllUsers);
router.route('/login').post(validatior.body(loginSchema), loginUser).all(notAllowed);

export default router;






