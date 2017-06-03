import { fromJS } from 'immutable';
import homePageReducer from '../reducer';

import {
  createGame,
  gameCreated,
} from '../actions';

describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      gameId: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the create game action correctly', () => {
    const expectedResult = state;

    expect(homePageReducer(state, createGame())).toEqual(expectedResult);
  });

  it('should handle the game created action correctly', () => {
    const gameId = '1234';
    const expectedResult = state
      .set('gameId', gameId);

    expect(homePageReducer(state, gameCreated(gameId))).toEqual(expectedResult);
  });
});
