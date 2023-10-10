import { Request, Response } from 'express';
import { User } from '../schemas/User';

type Data = {
  data: User;
};

interface Context {
  req: Request;
  res: Response;
  user: Data;
}

export default Context;
