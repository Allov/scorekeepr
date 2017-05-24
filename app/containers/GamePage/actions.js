import { LOAD_SHARED_GAME, LOAD_SHARED_GAME_SUCCESS, LOAD_SHARED_GAME_ERROR } from './constants';

export function loadSharedGame(shareId) {
  return {
    type: LOAD_SHARED_GAME,
    shareId,
  };
}

export function sharedGameLoaded(game) {
  return {
    type: LOAD_SHARED_GAME_SUCCESS,
    game,
  };
}

export function sharedGameLoadingError(error) {
  return {
    type: LOAD_SHARED_GAME_ERROR,
    error,
  };
}
