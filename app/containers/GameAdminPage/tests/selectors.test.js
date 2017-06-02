import { fromJS } from 'immutable';

import {
  makeSelectGame,
  makeSelectGameId,
} from '../selectors';

describe('makeSelectGame', () => {
  const gameSelector = makeSelectGame();
  it('should select the game', () => {
    const game = {
      players: [],
    };
    const mockedState = fromJS({
      'game-admin': fromJS({
        game,
      }),
    });
    expect(gameSelector(mockedState)).toEqual(game);
  });
});

describe('makeSelectGameId', () => {
  const gameIdSelector = makeSelectGameId();
  it('should select the gameId', () => {
    const gameId = '1234';
    const mockedState = fromJS({
      'game-admin': fromJS({
        gameId,
      }),
    });
    expect(gameIdSelector(mockedState)).toEqual(gameId);
  });
});
