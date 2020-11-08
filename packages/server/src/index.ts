import app from './app';
import config from './config/config';
import mongoose from 'mongoose';
import logger from './config/logger';

const PORT = config.port;
let server: any;
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(config.dbConnectionUrl, { useFindAndModify: false }).then(() => {
  server = app.listen(PORT, () => {
    logger.info(`Server is listinig on port: ${PORT}`);
  });
});

const existHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed!');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  logger.error(error);
  existHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
