import { Request, Response } from 'express';
import { User } from '../models/UserT';

interface Context {
  req: Request;
  res: Response;
  user: User;
}

export default Context;
