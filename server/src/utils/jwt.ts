import jwt from 'jsonwebtoken';
require('dotenv').config();

const secret = process.env.JWT_SECRET as string;

export const signJwt = (object: Object) => {
  return jwt.sign({ data: object }, secret);
};

export const verifyJwt = <T>(token: string): T | null => {
  try {
    const data = jwt.verify(token, secret) as T;
    return data;
  } catch (err) {
    return null;
  }
};
