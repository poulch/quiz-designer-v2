import { Response, Request } from 'express';
import brcypt from 'bcrypt';
import User from '../models/User';
import logger from '../config/logger';

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  logger.info('Start logging process!');

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    logger.info('Error: User with such email doesnt exist!');
    return res.status(404).send('User with such email doesnt exist!');
  }

  const isPasswordCorrect = await brcypt.compare(password, existingUser.password);

  if (!isPasswordCorrect) {
    logger.info('Error: Provided password is incorrect!');
    return res.status(409).send('Authentication failed!');
  }

  logger.info('Login sucessfull');
  res.sendStatus(200);
};

export default loginController;
