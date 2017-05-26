import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';
import FontAwesome from 'react-fontawesome';

import { GameAdminPage, mapDispatchToProps } from '../index';
import { loadGame } from '../actions';

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
      <GameAdminPage intl={intl} params={params} onLoadGame={() => {}} onAddPlayer={() => {}} game={game} />
    );
    expect(renderedComponent.contains(
      <FontAwesome name="user-plus" />
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
