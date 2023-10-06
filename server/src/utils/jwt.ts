import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../schemas/UserT';
import Context from '../types/context';
dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const signJwt = (object: Object) => {
  return jwt.sign(object, secret);
};

export const verifyJwt = <T>(token: string): T | null => {
  try {
    const decoded = jwt.verify(token, secret) as T;
    return decoded;
  } catch (err) {
    return null;
  }
};
