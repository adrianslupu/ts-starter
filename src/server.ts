import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { usersRouter } from './routes';
import pagesRouter from './routes/pages.routes';

export default function createServer(): Application {
  const app: Application = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    }),
  );

  app.use('/', pagesRouter);
  app.use('/users', usersRouter);

  return app;
}
