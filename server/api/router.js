import express from 'express';
import logger from '../logger';
import connection from '../database';

import { index } from './index';
import { gamesById, createGame, updateGame } from './games';

const router = express.Router();

router.get('/', index);

router.use((req, res, next) => {
  if (connection.databaseError) {
    res.status(500).send('Something went horribly wrong.');
    logger.error(`API requires MongoDB connection but is in error: ${connection.databaseError}`);
    return;
  }

  next();
});

router.get('/games/:id', gamesById);
router.put('/games/:id', updateGame);
router.post('/games', createGame);

module.exports = router;
