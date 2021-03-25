import * as dotenv from 'dotenv';
import createServer from './server';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const startServer = () => {
  const PORT: number = parseInt(process.env.PORT as string, 10);
  const app = createServer();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

startServer();
