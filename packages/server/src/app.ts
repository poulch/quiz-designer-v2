import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import authRouter from './routers/auth';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello world');
});

export default app;
