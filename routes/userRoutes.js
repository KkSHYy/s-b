import express from "express";
import { getAllUsers, loginUser, registeredUser, updateUser} from "../controllers/userControllers.js";
import { notAllowed } from "../utils/shareFunc.js";
import Joi from "joi";
import expressJoi from "express-joi-validation";
import { checkUser } from "../middlewares/userCheck.js";

const router = express.Router();

const validatior = expressJoi.createValidator({});

const registerSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(50).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(50).required(),
});

router.route('/').get(getAllUsers);
router.route('/login').post(validatior.body(loginSchema), loginUser).all(notAllowed);
router.route('/register').post(validatior.body(registerSchema), registeredUser).all(notAllowed);
router.route('/:id').patch(checkUser, updateUser).all(notAllowed);

export default router;






