import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectGameId = () => createSelector(
  selectHome,
  (state) => state.get('gameId')
);

const makeSelectHomeCreating = () => createSelector(
  selectHome,
  (state) => state.get('creating')
);

const makeSelectHomeError = () => createSelector(
  selectHome,
  (state) => state.get('error')
);

export {
  selectHome,
  makeSelectGameId,
  makeSelectHomeCreating,
  makeSelectHomeError,
};
