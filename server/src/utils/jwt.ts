import jwt from 'jsonwebtoken';
import { User } from '../schemas/User';
require('dotenv').config();

const secret = process.env.JWT_SECRET as string;

export const signJwt = (user: User) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  return jwt.sign({ data: payload }, secret);
};

export const verifyJwt = <T>(token: string): T | null => {
  try {
    const data = jwt.verify(token, secret) as T;
    return data;
  } catch (err) {
    return null;
  }
};
