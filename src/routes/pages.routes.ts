import express, { Request, Response } from 'express';
import Controllers from '../controllers';

const pagesRouter = express.Router();

pagesRouter.get('/', (req: Request, res: Response) => {
  Controllers.Pages.index(req, res);
});

pagesRouter.get('/about', (req: Request, res: Response) => {
  Controllers.Pages.about(req, res);
});

export default pagesRouter;
