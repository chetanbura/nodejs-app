import { UserModel } from '../model/usersModel.js';
import { catchWrapper } from '../utils/catchWrapper.js';

export const getUsers = (req, res, next) => {
  return catchWrapper(async () => {
    const users = await UserModel.find();
    return res.status(200).json({ data: { users } });
    }, 'User');
}

export const getUser = (req, res, next) => {
  return catchWrapper(async () => {
    const id = req.params['id'];
    const user = await UserModel.findById(id);
    return res.status(200).json({ data: { user } });
  }, 'User');
}

export const insertUser = (req, res, next) => {
  return catchWrapper(async () => {
    const firstName = req.body['firstName'];
    const lastName = req.body['lastName'];
    const email = req.body['email'];
    const password = req.body['password'];
    const user = await new UserModel({ firstName, lastName, email, password, status: 'active' }).save();
    return res.status(201).json({ message: "User created successfully", data: { user } });
  }, 'User');
}

export const updateUser = (req, res, next) => {
  return catchWrapper(async () => {
    const id = req.params['id'];
    const firstName = req.body['firstName'];
    const lastName = req.body['lastName'];
    const email = req.body['email'];
    const password = req.body['password'];
    const status = req.body['status'];
    const user = await new UserModel.findByIdAndUpdate(id, { firstName, lastName, email, password, status }).save();
    return res.status(200).json({ message: "User updated successfully", data: { user } });
  }, 'User');
}

export const deleteUser = (req, res, next) => {
  return catchWrapper(async () => {
    const id = req.params['id'];
    await UserModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully" });
  }, 'User');
}