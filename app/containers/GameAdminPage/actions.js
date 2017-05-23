import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  LOAD_GAME_NOT_FOUND,
  LOAD_GAME_FORBIDDEN,
  LOAD_GAME_ERROR,
  ADD_PLAYER,
  INCREMENT_PLAYER,
  DECREMENT_PLAYER,
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

export function gameAddPlayer() {
  return {
    type: ADD_PLAYER,
  };
}

export function gameIncrementPlayer() {
  return {
    type: INCREMENT_PLAYER,
  };
}

export function gameDecrementPlayer() {
  return {
    type: DECREMENT_PLAYER,
  };
}
