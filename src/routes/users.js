import express from "express";

import { getUser, getUsers, deleteUser, insertUser, updateUser } from "../controllers/usersController.js";

export const usersRouter = express.Router();

usersRouter.get('/users', getUsers);

usersRouter.get('/users/:id', getUser);

usersRouter.post('/users', insertUser);

usersRouter.patch('/users/:id', updateUser);

usersRouter.delete('/users/:id', deleteUser);