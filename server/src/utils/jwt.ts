import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const publicKey = process.env.JWT_PUBLIC_KEY;
const privateKey = process.env.JWT_PRIVATE_KEY;

const publicKeyBuffer = Buffer.from(publicKey!, 'base64').toString('ascii');
const privateKeyBuffer = Buffer.from(privateKey!, 'base64').toString('ascii');

console.log(publicKeyBuffer);
console.log(privateKeyBuffer);

export const signJwt = () => {};

// export const signJwt = (
//   object: Object,
//   options?: jwt.SignOptions | undefined
// ) => {
//   const payload = {
//     ...object,
//   };
//   return jwt.sign({ data: payload }, secret, {
//     ...(options && options),
//     algorithm: 'RS256',
//   });
// };

// export const verifyJwt = (token) => {};
