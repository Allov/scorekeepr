import { createSelector } from 'reselect';

const selectGameAdmin = (state) => state.get('game-admin');

const makeSelectGameId = () => createSelector(
  selectGameAdmin,
  (state) => state.get('gameId'),
);

const makeSelectGame = () => createSelector(
  selectGameAdmin,
  (state) => state.get('game').toJS(),
);

export {
  selectGameAdmin,
  makeSelectGameId,
  makeSelectGame,
};
