import express from 'express';
import authRouter from './routers/auth';
import config from './config';

const app = express();
const port = config.port;

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
