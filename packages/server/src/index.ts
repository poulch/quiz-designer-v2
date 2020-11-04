import express, { Request, Response } from 'express';
import config from './config';

const app = express();
const port = config.port;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
