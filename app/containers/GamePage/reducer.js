import { fromJS } from 'immutable';

import { LOAD_SHARED_GAME, LOAD_SHARED_GAME_SUCCESS, LOAD_SHARED_GAME_ERROR } from './constants';

const initialState = fromJS({
  shareId: false,
  game: {
    players: [],
  },
  loading: false,
  error: false,
});

function sharedGameReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SHARED_GAME:
      return state
        .set('shareId', action.shareId)
        .set('loading', true)
        .set('error', false);
    case LOAD_SHARED_GAME_SUCCESS:
      return state
        .set('game', action.game)
        .set('loading', false)
        .set('error', false);
    case LOAD_SHARED_GAME_ERROR:
      return state
        .set('game', false)
        .set('loading', false)
        .set('error', true);
    default:
      return state;
  }
}

export default sharedGameReducer;

