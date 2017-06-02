import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';
import FontAwesome from 'react-fontawesome';
import { bindIndexToActionCreator } from 'utils/bindIndexToActionCreator';

import LoadingPanel from 'components/LoadingPanel';
import NotFoundPage from 'containers/NotFoundPage';

import {
  GameAdminPage,
  mapDispatchToProps,
} from '../index';

import {
  loadGame,
  gameAddPlayer,
  resetScores,
  gameChangePlayerName,
  gameChangePlayerScore,
  gameDecrementPlayer,
  gameIncrementPlayer,
} from '../actions';

const game = {
  id: 'dont-care',
  name: 'dont-care',
  createdDate: Date('2017-05-22'),
  players: [],
};

describe('<GameAdminPage />', () => {
  it('should render the page message', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const params = {
      id: 'test',
    };

    const renderedComponent = shallow(
      <GameAdminPage intl={intl} params={params} onLoadGame={() => { }} onAddPlayer={() => { }} onResetScores={() => { }} game={game} />
    );
    expect(renderedComponent.contains(
      <FontAwesome name="user-plus" />
    )).toEqual(true);
  });

  it('should display LoadingPanel when loading', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const params = {
      id: 'test',
    };

    const renderedComponent = shallow(
      <GameAdminPage intl={intl} notFound params={params} onLoadGame={() => { }} onAddPlayer={() => { }} onResetScores={() => { }} game={game} />
    );
    expect(renderedComponent.contains(
      <NotFoundPage />
    )).toEqual(true);
  });

  it('should display NotFoundPage when NotFound', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const params = {
      id: 'test',
    };

    const renderedComponent = shallow(
      <GameAdminPage intl={intl} loading params={params} onLoadGame={() => { }} onAddPlayer={() => { }} onResetScores={() => { }} game={game} />
    );
    expect(renderedComponent.contains(
      <LoadingPanel />
    )).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onLoadGame', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoadGame).toBeDefined();
      });

      it('should dispatch loadGame when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const gameId = 'dont-care';
        result.onLoadGame(gameId);
        expect(dispatch).toHaveBeenCalledWith(loadGame(gameId));
      });
    });

    describe('onAddPlayer', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onAddPlayer).toBeDefined();
      });

      it('should dispatch gameAddPlayer when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onAddPlayer();
        expect(dispatch).toHaveBeenCalledWith(gameAddPlayer());
      });
    });

    describe('onResetScores', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onResetScores).toBeDefined();
      });

      it('should dispatch resetScores when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onResetScores();
        expect(dispatch).toHaveBeenCalledWith(resetScores());
      });
    });

    describe('playerDispatchProperties', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onPlayerActions).toBeDefined();
      });

      it('should dispatch gameChangePlayerName when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onPlayerActions(0)(dispatch).onPlayerNameChanged();
        expect(dispatch).toHaveBeenCalledWith(bindIndexToActionCreator(gameChangePlayerName, 0)());
      });

      it('should dispatch gameChangePlayerScore when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onPlayerActions(0)(dispatch).onValueChangedHandler(0);
        expect(dispatch).toHaveBeenCalledWith(bindIndexToActionCreator(gameChangePlayerScore, 0)(0));
      });

      it('should dispatch gameIncrementPlayer when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onPlayerActions(0)(dispatch).onAddHandler();
        expect(dispatch).toHaveBeenCalledWith(bindIndexToActionCreator(gameIncrementPlayer, 0)());
      });

      it('should dispatch gameDecrementPlayer when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onPlayerActions(0)(dispatch).onSubstractHandler();
        expect(dispatch).toHaveBeenCalledWith(bindIndexToActionCreator(gameDecrementPlayer, 0)());
      });
    });
  });
});
