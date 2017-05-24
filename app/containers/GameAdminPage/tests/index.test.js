import React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';
import FontAwesome from 'react-fontawesome';

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

    const renderedComponent = shallow(
      <GameAdminPage intl={intl} params={params} onLoadGame={() => {}} onAddPlayer={() => {}} game={game} />
    );
    expect(renderedComponent.contains(
      <FontAwesome name="user-plus" />
    )).toEqual(true);
  });
});
