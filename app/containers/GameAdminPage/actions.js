import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  ADD_PLAYER,
  INCREMENT_PLAYER,
  DECREMENT_PLAYER,
  RESET_SCORES,
  CHANGE_PLAYER_NAME,
  CHANGE_PLAYER_SCORE,
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

export function gameAddPlayer(name) {
  return {
    type: ADD_PLAYER,
    name,
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

export function resetScores() {
  return {
    type: RESET_SCORES,
  };
}

export function gameChangePlayerName(name) {
  return {
    type: CHANGE_PLAYER_NAME,
    name,
  };
}

export function gameChangePlayerScore(score) {
  return {
    type: CHANGE_PLAYER_SCORE,
    score,
  };
}
