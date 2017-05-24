import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';

import PlayerListReadOnly from 'components/PlayerListReadOnly';

import { GamePage } from '../index';

describe('<GamePage />', () => {
  it('should render the page message', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const game = {
      players: [],
    };

    const renderedComponent = shallow(
      <GamePage intl={intl} game={game} params={{}} onLoadSharedGame={() => {}} />
    );

    expect(renderedComponent.contains(
      <PlayerListReadOnly players={game.players} />
    )).toEqual(true);
  });
});
