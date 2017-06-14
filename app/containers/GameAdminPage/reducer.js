import { fromJS } from 'immutable';

import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  ADD_PLAYER,
  INCREMENT_PLAYER,
  DECREMENT_PLAYER,
  CHANGE_PLAYER_NAME,
  CHANGE_PLAYER_SCORE,
  RESET_SCORES,
} from './constants';

const initialState = fromJS({
  name: '',
  game: {
    players: [],
  },
  defaultIncrement: 1,
  lostConnection: false,
});

function gameAdminReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAME:
      return state
        .set('gameId', action.gameId);
    case LOAD_GAME_SUCCESS:
      return state
        .set('game', fromJS(action.game));
    case ADD_PLAYER:
      return state
        .updateIn(['game', 'players'], (players) => players.push(fromJS({ name: action.name, score: 0 })));
    case INCREMENT_PLAYER:
      return state
        .updateIn(['game', 'players'], (players) => players.update(action.index, (player) => player.set('score', player.get('score') + state.get('defaultIncrement'))));
    case DECREMENT_PLAYER:
      return state
        .updateIn(['game', 'players'], (players) => players.update(action.index, (player) => player.set('score', player.get('score') - state.get('defaultIncrement'))));
    case CHANGE_PLAYER_NAME:
      return state
        .updateIn(['game', 'players'], (players) => players.update(action.index, (player) => player.set('name', action.name)));
    case CHANGE_PLAYER_SCORE:
      return state
        .updateIn(['game', 'players'], (players) => players.update(action.index, (player) => player.set('score', action.score)));
    case RESET_SCORES:
      return state
        .updateIn(['game', 'players'], (players) => players.map((player) => player.set('score', 0)));
    default:
      return state;
  }
}

export default gameAdminReducer;
