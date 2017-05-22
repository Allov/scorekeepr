import {
  CREATE_GAME,
  GAME_CREATION_SUCCESS,
  GAME_CREATION_ERROR,
} from './constants';

export function createGame() {
  return {
    type: CREATE_GAME,
  };
}

export function gameCreated(gameId) {
  return {
    type: GAME_CREATION_SUCCESS,
    gameId,
  };
}

export function gameCreateError(error) {
  return {
    type: GAME_CREATION_ERROR,
    error,
  };
}
