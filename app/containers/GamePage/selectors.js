import { createSelector } from 'reselect';

const selectSharedGame = (state) => state.get('shared-game');

const makeSelectSharedGame = () => createSelector(
  selectSharedGame,
  (state) => state.get('game'),
);

const makeSelectSharedGameId = () => createSelector(
  selectSharedGame,
  (state) => state.get('shareId'),
);

const makeSelectSharedGameLoading = () => createSelector(
  selectSharedGame,
  (state) => state.get('loading'),
);

const makeSelectSharedGameLoadingError = () => createSelector(
  selectSharedGame,
  (state) => state.get('error'),
);

export {
  selectSharedGame,
  makeSelectSharedGame,
  makeSelectSharedGameId,
  makeSelectSharedGameLoading,
  makeSelectSharedGameLoadingError,
};
