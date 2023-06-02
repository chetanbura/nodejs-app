import { UserModel } from '../model/usersModel.js';
import { catchWrapper } from '../utils/catchWrapper.js';
import { generateJWT } from '../utils/auth.js';

export const signIn = (req, res, next) => {
  return catchWrapper(async () => {
    const email = req.body['email'];
    const password = req.body['password'];
    const user = await UserModel.findOne({ email, password });
    if (user) {
      const token = generateJWT({ email: user.email, firstName: user.firstName });
      return res.status(200).json({ data: { token } });
    } else {
      return res.status(403).json({ message: "Unauthorize, please verify your credentials!" });
    }
  }, 'Auth');
}

export const signUp = (req, res, next) => {
  return catchWrapper(async () => {
    const firstName = req.body['firstName'];
    const lastName = req.body['lastName'];
    const email = req.body['email'];
    const password = req.body['password'];
    const user = await new UserModel({ firstName, lastName, email, password, status: 'active' }).save();
    return res.status(201).json({ message: "User sign up successfully!", data: { user } });
  }, 'Auth');
}

export const checkUserExist = async (req, res, next) => {
  const email = req.body['email'];
  const user = await UserModel.findOne({ email });
  if (!user) {
    next();
  } else {
    return res.status(200).json({ message: `The entered ${email} is not available, please use different email!` });
  }
}