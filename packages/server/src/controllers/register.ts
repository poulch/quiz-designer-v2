import { Response, Request } from 'express';
import brcypt from 'bcrypt';
import logger from '../config/logger';
import User from '../models/User';
import { Session } from '../types';

const registerController = async (req: Request, res: Response) => {
  const { email, password, displayName } = req.body;
  const saltRounds = 10;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    logger.info(`User with ${email} already exist`);
    return res.status(409).send('User with such email already exists!');
  }

  logger.info(`Starting to register user with email: ${email}`);

  const hashedPassword = await brcypt.hash(password, saltRounds);
  const user = new User({
    displayName,
    email,
    password: hashedPassword,
  });
  await user.save();

  (req.session as Session).user = existingUser;

  logger.info(`New user with id ${user._id}  created!`);

  res.status(200).send();
};

export default registerController;
