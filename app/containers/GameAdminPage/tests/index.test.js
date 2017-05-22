import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';

import PlayerList from 'components/PlayerList';

import { GameAdminPage } from '../index';

describe('<GameAdminPage />', () => {
  it('should render the page message', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const renderedComponent = shallow(
      <GameAdminPage intl={intl} />
    );
    expect(renderedComponent.contains(
      <PlayerList />
    )).toEqual(true);
  });
});
