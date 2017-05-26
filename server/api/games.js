const mongoose = require('mongoose');
const sillyname = require('sillyname');
const connection = require('../database');
const logger = require('../logger');

// mongoose setup
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const GameSchema = new Schema({
  objectId: ObjectId,
  shareId: String,
  name: String,
  players: Array,
}, { timestamps: true });

const Game = connection.database.model('Game', GameSchema);

// helpers
function handleGracefully(res, err, result, cb) {
  if (err) {
    res.status(500).send('Something went horribly wrong.');
    logger.error(err);
  } else if (result == null) {
    res.status(404).send('Game was not found.');
  } else {
    cb();
  }
}

function toGameDTO(result) {
  return {
    id: result._id, // eslint-disable-line no-underscore-dangle
    shareId: result.shareId,
    name: result.name,
    players: result.players,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  };
}

// api
// GET /games/:id
const gamesById = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send('Game not found.');
    return;
  }

  Game.findById(req.params.id, (err, result) => {
    handleGracefully(res, err, result, () => {
      setTimeout(() => {
        res.status(200)
          .json(toGameDTO(result));
      }, 4000);
    });
  });
};

// PUT /games/:id
const updateGame = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send('Game not found.');
    return;
  }

  Game.findById(req.params.id, (err, result) => {
    handleGracefully(res, err, result, () => {
      const payload = req.body;
      const updatedResult = result;

      if (payload.name) {
        updatedResult.name = payload.name;
      } else {
        res.status(400).send('Game name is required.');
        return;
      }

      // gives players random names if none supplied
      updatedResult.players = payload.players.map((player) => {
        const updatedPlayer = player;
        if (!player.name) {
          updatedPlayer.name = sillyname();
        }
        return updatedPlayer;
      });

      updatedResult.save();

      res.status(204).send();
    });
  });
};

// POST /games
const createGame = (req, res) => {
  const shareId = Math.random().toString(36).substring(20);

  const game = new Game({
    shareId: `${sillyname()}${sillyname()}`.replace(/ /g, ''),
    name: sillyname(),
    players: [],
  });

  game.save();

  res.status(201)
    .location(`/api/games/${shareId}`)
    .json({
      id: game._id, // eslint-disable-line no-underscore-dangle
      shareId: game.shareId,
      name: game.name,
      players: game.players,
    });
};

// GET /games/search-by-share/:shareId
const searchGameByShareId = (req, res) => {
  Game.findOne({
    shareId: req.params.id,
  }, (err, result) => {
    handleGracefully(res, err, result, () => {
      res.status(200)
        .json(toGameDTO(result));
    });
  });
};

module.exports = {
  gamesById,
  createGame,
  updateGame,
  searchGameByShareId,
};
