import { fromJS } from 'immutable';
import gameAdminReducer from '../reducer';

import {
  gameAddPlayer,
  gameChangePlayerName,
  gameChangePlayerScore,
  gameDecrementPlayer,
  gameIncrementPlayer,
  gameLoaded,
  loadGame,
  resetScores,
} from '../actions';

describe('gameAdminReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      name: '',
      game: {
        players: [],
      },
      defaultIncrement: 1,
      lostConnection: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(gameAdminReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the add player action correctly', () => {
    const expectedResult = state
      .updateIn(['game', 'players'], (players) => players.push(fromJS({
        name: '',
        score: 0,
      })));

    expect(gameAdminReducer(state, gameAddPlayer())).toEqual(expectedResult);
  });

  it('should handle the game loaded action correctly', () => {
    const game = {
      players: [],
    };

    const expectedResult = state
      .set('game', fromJS(game));

    expect(gameAdminReducer(state, gameLoaded(game))).toEqual(expectedResult);
  });

  it('should handle the load game action correctly', () => {
    const gameId = '1234';

    const expectedResult = state
      .set('gameId', gameId);

    expect(gameAdminReducer(state, loadGame(gameId))).toEqual(expectedResult);
  });

  it('should handle the reset scores action correctly', () => {
    const stateWithScoredPlayers = state
      .updateIn(['game', 'players'], (players) => players.push(fromJS({
        name: '',
        score: 1,
      })));

    const expectedResult = stateWithScoredPlayers
      .updateIn(['game', 'players'], (players) => players.update(0, (player) => player.set('score', 0)));

    expect(gameAdminReducer(stateWithScoredPlayers, resetScores())).toEqual(expectedResult);
  });

  describe('playerState', () => {
    const stateWithPlayer = fromJS({
      name: '',
      game: {
        players: [fromJS({
          name: '',
          score: 0,
        })],
      },
      defaultIncrement: 1,
    });

    const applyActionToFirstPlayer = (action) => (
      gameAdminReducer(stateWithPlayer, Object.assign({}, action, { index: 0 }))
        .get('game')
        .get('players')
        .get(0)
    );

    it('should handle the change player name action correctly', () => {
      const expected = fromJS({
        name: 'test',
        score: 0,
      });

      expect(applyActionToFirstPlayer(gameChangePlayerName('test'))).toEqual(expected);
    });

    it('should handle the change player score action correctly', () => {
      const expected = fromJS({
        name: '',
        score: -3,
      });

      expect(applyActionToFirstPlayer(gameChangePlayerScore(-3))).toEqual(expected);
    });

    it('should handle the decrement player score action correctly', () => {
      const expected = fromJS({
        name: '',
        score: -1,
      });

      expect(applyActionToFirstPlayer(gameDecrementPlayer())).toEqual(expected);
    });

    it('should handle the increment player score action correctly', () => {
      const expected = fromJS({
        name: '',
        score: 1,
      });

      expect(applyActionToFirstPlayer(gameIncrementPlayer())).toEqual(expected);
    });
  });
});
