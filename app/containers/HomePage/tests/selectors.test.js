import { fromJS } from 'immutable';

import {
  makeSelectGameId,
} from '../selectors';

describe('makeSelectGameId', () => {
  const gameIdSelector = makeSelectGameId();
  it('should select the gameId', () => {
    const gameId = '1234';
    const mockedState = fromJS({
      home: fromJS({
        gameId,
      }),
    });
    expect(gameIdSelector(mockedState)).toEqual(gameId);
  });
});
