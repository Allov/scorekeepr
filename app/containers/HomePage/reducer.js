import { fromJS } from 'immutable';

import {
  CREATE_GAME,
  GAME_CREATION_SUCCESS,
} from './constants';

const initialState = fromJS({
  gameId: false,
  creating: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GAME:
      return state
        .set('gameId', false)
        .set('creating', true);
    case GAME_CREATION_SUCCESS:
      return state
        .set('gameId', action.gameId)
        .set('creating', false);
    default:
      return state;
  }
}

export default homeReducer;
