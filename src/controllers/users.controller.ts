import { Request, Response } from 'express';
import { CrudController } from './base/crud.controller';

export class UsersController extends CrudController {
  create(req: Request, res: Response): void {
    throw new Error();
  }

  delete(req: Request, res: Response): void {
    throw new Error();
  }

  read(req: Request, res: Response): void {
    res.status(200).json({ message: 'GET /users request received' });
  }

  update(req: Request, res: Response): void {
    throw new Error();
  }
}
