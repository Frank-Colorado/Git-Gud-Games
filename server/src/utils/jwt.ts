import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const signJwt = ({ username, _id }) => {
  const payload = { username, _id };
  return jwt.sign({ data: payload }, secret);
};
export const verifyJwt = <T>(token: string): T | null => {
  try {
    const decoded = jwt.verify(token, secret) as T;
    return decoded;
  } catch (err) {
    return null;
  }
};
