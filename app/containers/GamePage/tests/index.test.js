import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';

import PlayerListReadOnly from 'components/PlayerListReadOnly';

import { GamePage, mapDispatchToProps } from '../index';
import { loadGame } from '../../GameAdminPage/actions';

describe('<GamePage />', () => {
  it('should render the page message', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const game = {
      players: [],
    };

    const renderedComponent = shallow(
      <GamePage intl={intl} game={game} params={{}} onLoadGame={() => {}} />
    );

    expect(renderedComponent.contains(
      <PlayerListReadOnly players={game.players} />
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
  });
});
