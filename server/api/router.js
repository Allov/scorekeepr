const express = require('express');
const logger = require('../logger');
const connection = require('../database');

const { index } = require('./index');
const { gamesById, createGame, updateGame, searchGameByShareId } = require('./games');

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
router.get('/games/search-by-share/:id', searchGameByShareId);
router.put('/games/:id', updateGame);
router.post('/games', createGame);

module.exports = router;
