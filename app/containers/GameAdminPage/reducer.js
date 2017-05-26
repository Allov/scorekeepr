import { fromJS } from 'immutable';

import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  ADD_PLAYER,
  INCREMENT_PLAYER,
  DECREMENT_PLAYER,
} from './constants';

const initialState = fromJS({
  game: {
    players: [],
  },
  defaultIncrement: 1,
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
