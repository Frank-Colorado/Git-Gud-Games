import { Request, Response } from 'express';
import { User } from '../schemas/UserT';

interface Context {
  req: Request;
  res: Response;
  user: User;
}

export default Context;
