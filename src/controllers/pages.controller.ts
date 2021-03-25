import { Request, Response } from 'express';

export class PagesController {
  index(req: Request, res: Response): void {
    res.status(200).json({ message: 'Home page route' });
  }

  about(req: Request, res: Response): void {
    res.status(200).json({ message: 'About page route' });
  }
}
