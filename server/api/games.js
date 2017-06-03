import mongoose from 'mongoose';
import sillyname from 'sillyname';
import { handleGracefully } from '../database';
import { Game, toGameDTO } from '../models/game';

// api
// GET /games/:id
const gamesById = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send('Game not found.');
    return;
  }

  Game.findById(req.params.id, (err, result) => {
    handleGracefully(res, err, result, () => {
      res.status(200)
        .json(toGameDTO(result));
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

module.exports = {
  gamesById,
  createGame,
  updateGame,
};
