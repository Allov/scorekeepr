import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  ADD_PLAYER,
  DECREMENT_PLAYER,
  INCREMENT_PLAYER,
} from '../constants';

import {
  loadGame,
  gameLoaded,
  gameAddPlayer,
  gameDecrementPlayer,
  gameIncrementPlayer,
} from '../actions';

describe('GameAdminPage Actions', () => {
  describe('loadGame', () => {
    it('should return the correct type', () => {
      const gameId = 1;
      const expectedResult = {
        type: LOAD_GAME,
        gameId,
      };

      expect(loadGame(gameId)).toEqual(expectedResult);
    });
  });

  describe('gameLoaded', () => {
    it('should return the correct type', () => {
      const game = {};
      const expectedResult = {
        type: LOAD_GAME_SUCCESS,
        game,
      };

      expect(gameLoaded(game)).toEqual(expectedResult);
    });
  });

  describe('gameAddPlayer', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ADD_PLAYER,
      };

      expect(gameAddPlayer()).toEqual(expectedResult);
    });
  });

  describe('gameDecrementPlayer', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: DECREMENT_PLAYER,
      };

      expect(gameDecrementPlayer()).toEqual(expectedResult);
    });
  });

  describe('gameIncrementPlayer', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: INCREMENT_PLAYER,
      };

      expect(gameIncrementPlayer()).toEqual(expectedResult);
    });
  });
});
