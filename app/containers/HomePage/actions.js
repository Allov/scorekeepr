import {
  CREATE_GAME,
  GAME_CREATION_SUCCESS,
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
