import express from "express";

import { signIn, signUp } from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.post('/signin', signIn);

authRouter.post('/signup', signUp);
