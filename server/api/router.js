const express = require('express');
const { index } = require('./index');
const { gamesById, createGame } = require('./games');

const router = express.Router();

router.get('/', index);
router.get('/games/:id', gamesById);
router.post('/games', createGame);

module.exports = router;
