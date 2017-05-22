import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  LOAD_GAME_NOT_FOUND,
  LOAD_GAME_FORBIDDEN,
  LOAD_GAME_ERROR,
} from './constants';

export function loadGame(gameId) {
  return {
    type: LOAD_GAME,
    gameId,
  };
}

export function gameLoaded(game) {
  return {
    type: LOAD_GAME_SUCCESS,
    game,
  };
}

export function gameNotFound() {
  return {
    type: LOAD_GAME_NOT_FOUND,
  };
}

export function gameAccessUnauthorized() {
  return {
    type: LOAD_GAME_FORBIDDEN,
  };
}

export function gameLoadingError(error) {
  return {
    type: LOAD_GAME_ERROR,
    error,
  };
}
