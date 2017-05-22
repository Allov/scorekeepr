import { fromJS } from 'immutable';

import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  LOAD_GAME_NOT_FOUND,
  LOAD_GAME_FORBIDDEN,
  LOAD_GAME_ERROR,
} from './constants';

const initialState = fromJS({
  game: false,
  loading: false,
  notFound: false,
  unauthorized: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAME:
      return state
        .set('gameId', action.gameId)
        .set('loading', true)
        .set('error', false);
    case LOAD_GAME_SUCCESS:
      return state
        .set('game', action.game)
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
    default:
      return state;
  }
}

export default homeReducer;
