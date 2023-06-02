import express from "express";

import { signIn, signUp, checkUserExist } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.post('/signin', signIn);

authRouter.post('/signup', checkUserExist, signUp);
