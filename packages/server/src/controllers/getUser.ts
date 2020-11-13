import { Response, Request } from 'express';
import { Session } from '../types';
import logger from '../config/logger';

const getUserController = (req: Request, res: Response) => {
  const session = req?.session as Session;

  logger.info(`Check if user has session ${JSON.stringify(req.session, null, 2)}`);

  if (session && session?.user) {
    logger.info('User has session', JSON.stringify(session.user, null, 2));
    return res.status(302).json(session.user);
  }

  logger.info('User not found');
  res.sendStatus(404);
};

export default getUserController;
