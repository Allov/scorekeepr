import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectGameId = () => createSelector(
  selectHome,
  (state) => state.get('gameId')
);

export {
  selectHome,
  makeSelectGameId,
};
