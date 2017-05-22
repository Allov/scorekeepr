import { fromJS } from 'immutable';

import {
  CREATE_GAME,
  GAME_CREATION_SUCCESS,
  GAME_CREATION_ERROR,
} from './constants';

const initialState = fromJS({
  gameId: false,
  creating: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GAME:
      return state
        .set('gameId', false)
        .set('creating', true)
        .set('error', false);
    case GAME_CREATION_SUCCESS:
      return state
        .set('gameId', action.gameId)
        .set('creating', false)
        .set('error', false);
    case GAME_CREATION_ERROR:
      return state
        .set('gameId', false)
        .set('creating', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
