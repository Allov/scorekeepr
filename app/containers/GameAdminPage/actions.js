import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
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
