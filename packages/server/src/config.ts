import getEnv from 'getenv';
import {config as  dotenv} from 'dotenv';
dotenv();

const config: {[key: string]: any} = {}

config.port = getEnv.int('PORT', 4004);

export default  config;
