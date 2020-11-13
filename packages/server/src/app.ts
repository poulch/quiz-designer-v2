import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import authRouter from './routers/auth';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: 'mojsecret',
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/auth', authRouter);
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello world');
});

export default app;
