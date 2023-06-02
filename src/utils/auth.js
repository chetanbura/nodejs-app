import jwt from 'jsonwebtoken';

const SECRET_KEY = 'First-Node-App';

export const generateJWT = (data) => {
  const token = jwt.sign({
    data
  }, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

export const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
  if (decoded) return true;
  else false;
  } catch(err) {
    return false;
  }
}