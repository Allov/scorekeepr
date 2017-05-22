import { createSelector } from 'reselect';

const selectGameAdmin = (state) => state.get('game-admin');

const makeSelectGameId = () => createSelector(
  selectGameAdmin,
  (state) => state.get('gameId'),
);

const makeSelectGame = () => createSelector(
  selectGameAdmin,
  (state) => state.get('game'),
);

const makeSelectGameLoading = () => createSelector(
  selectGameAdmin,
  (state) => state.get('loading'),
);

const makeSelectGameNotFound = () => createSelector(
  selectGameAdmin,
  (state) => state.get('notFound'),
);

export {
  selectGameAdmin,
  makeSelectGameId,
  makeSelectGame,
  makeSelectGameLoading,
  makeSelectGameNotFound,
};
