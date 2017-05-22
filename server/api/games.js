const gamesById = (req, res) => {
  res.json({
    id: req.params.id,
    name: 'test',
    createdDate: Date.now(),
    players: [
      { score: 0 },
      { score: 0 },
      { score: 0 },
      { score: 0 },
      { score: 0 },
    ],
  });
};

const createGame = (req, res) => {
  const gameId = Math.random().toString(36).substring(7);

  res.status(201)
    .location(`/api/games/${gameId}`)
    .json({
      id: gameId,
      createdDate: Date.now(),
      players: [],
    });
};

module.exports = {
  gamesById,
  createGame,
};
