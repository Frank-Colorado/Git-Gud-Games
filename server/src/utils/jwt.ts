import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request } from 'express';
import { User } from '../schemas/UserT';
dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const signJwt = ({ username, _id }: User) => {
  const payload = { username, _id };
  return jwt.sign({ data: payload }, secret);
};
export const verifyJwt<T> = (req: Request) => {
  try {
    const decoded = jwt.verify(token, secret) as T;
    return decoded;
  } catch (err) {
    return null;
  }
};
