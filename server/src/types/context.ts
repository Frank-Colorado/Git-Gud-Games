import { Request, Response } from 'express';
import { User } from '../schemas/User';

export interface Data {
  data: User;
}

interface Context {
  req: Request;
  res: Response;
  user: Data | null;
}

export default Context;
