import { Session as ExpressSession, InitializedSession } from 'express-session';
import { IUser } from './models/User';

export interface Session extends ExpressSession, InitializedSession {
  user?: IUser;
}
