const mongoose = require('mongoose');
const logger = require('../logger');

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

module.exports = new Connection();
