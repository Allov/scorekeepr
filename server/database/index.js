import mongoose from 'mongoose';
import logger from '../logger';

class Connection {
  constructor() {
    this.databaseError = false;
    this.database = false;
  }

  init() {
    const scorekeeprDb = mongoose.createConnection('localhost', 'scorekeepr', { server: { auto_reconnect: true } });
    scorekeeprDb.on('error', (err) => {
      this.databaseError = err;
      logger.error(`Mongo connection error: ${err}`);

      if (err.message.indexOf('first connect') > -1) {
        throw new Error('Could not connect to mongodb on first connect. Start MongoDB first.');
      }
    });
    scorekeeprDb.on('disconnected', () => {
      this.databaseError = 'Mongo connection lost.';
      logger.error(this.databaseError);
    });
    scorekeeprDb.on('reconnected', () => {
      this.databaseError = false;
      logger.warning('Mongo connection recovered.');
    });

    this.database = scorekeeprDb;
  }
}

// helpers
export function handleGracefully(res, err, result, cb) {
  if (err) {
    res.status(500).send('Something went horribly wrong.');
    logger.error(err);
  } else if (result == null) {
    res.status(404).send('Game was not found.');
  } else {
    cb();
  }
}

export default new Connection();
