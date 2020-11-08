import getenv from 'getenv';
import { config as dotenv } from 'dotenv';
dotenv();

const config: { [key: string]: any } = {};

config.env = getenv('NODE_ENV', 'development');
config.port = getenv.int('PORT', 4004);
config.dbConnectionUrl = getenv('DB_CONNECT_URL');

export default config;
