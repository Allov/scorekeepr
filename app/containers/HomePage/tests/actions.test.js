import {
  createGame,
  gameCreated,
} from '../actions';

import {
  CREATE_GAME,
  GAME_CREATION_SUCCESS,
} from '../constants';

describe('HomePage Actions', () => {
  describe('createGame', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CREATE_GAME,
      };

      expect(createGame()).toEqual(expectedResult);
    });
  });

  describe('gameCreated', () => {
    it('should return the correct type', () => {
      const gameId = '1234';
      const expectedResult = {
        type: GAME_CREATION_SUCCESS,
        gameId,
      };

      expect(gameCreated(gameId)).toEqual(expectedResult);
    });
  });
});
