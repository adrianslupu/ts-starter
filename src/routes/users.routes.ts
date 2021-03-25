import express, { Request, Response } from 'express';
import Controllers from '../controllers';

const usersRouter = express.Router({
  strict: true,
});

usersRouter.post('/', (req: Request, res: Response) => {
  Controllers.Users.create(req, res);
});
usersRouter.get('/', (req: Request, res: Response) => {
  Controllers.Users.read(req, res);
});
usersRouter.patch('/', (req: Request, res: Response) => {
  Controllers.Users.update(req, res);
});
usersRouter.delete('/', (req: Request, res: Response) => {
  Controllers.Users.delete(req, res);
});

export default usersRouter;
