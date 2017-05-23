import { fromJS } from 'immutable';

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

const initialState = fromJS({
  game: {
    players: [],
  },
  loading: false,
  notFound: false,
  unauthorized: false,
  error: false,
  defaultIncrement: 1,
});

function gameAdminReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAME:
      return state
        .set('gameId', action.gameId)
        .set('loading', true)
        .set('error', false);
    case LOAD_GAME_SUCCESS:
      return state
        .set('game', fromJS(action.game))
        .set('loading', false)
        .set('error', false);
    case LOAD_GAME_NOT_FOUND:
      return state
        .set('game', false)
        .set('loading', false)
        .set('notFound', true);
    case LOAD_GAME_FORBIDDEN:
      return state
        .set('game', false)
        .set('loading', false)
        .set('unauthorized', true);
    case LOAD_GAME_ERROR:
      return state
        .set('game', false)
        .set('loading', false)
        .set('error', action.error);
    case ADD_PLAYER:
      return state
        .updateIn(['game', 'players'], (players) => players.push(fromJS({ score: 0 })));
    case INCREMENT_PLAYER:
      return state
        .updateIn(['game', 'players'], (players) => players.update(action.index, (p) => p.set('score', p.get('score') + state.get('defaultIncrement'))));
    case DECREMENT_PLAYER:
      return state
        .updateIn(['game', 'players'], (players) => players.update(action.index, (p) => p.set('score', p.get('score') - state.get('defaultIncrement'))));
    default:
      return state;
  }
}

export default gameAdminReducer;
