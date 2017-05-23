import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';

import PlayerList from 'components/PlayerList';

import { GameAdminPage } from '../index';

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

    const onLoadGameSpy = jest.fn();

    const renderedComponent = shallow(
      <GameAdminPage intl={intl} params={params} onLoadGame={onLoadGameSpy} game={game} />
    );
    expect(renderedComponent.contains(
      <PlayerList players={game.players} />
    )).toEqual(true);
  });
});
