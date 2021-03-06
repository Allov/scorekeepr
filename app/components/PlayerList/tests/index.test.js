import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { mount } from 'enzyme';

import PlayerList from '../index';
import messages from '../messages';

const players = [
  {
    score: 0,
  },
  {
    score: 0,
  },
  {
    score: 0,
  },
];

const playerDispatchProperties = () => () => {};

describe('<PlayerList />', () => {
  it('should render the page message', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <PlayerList playerDispatchProperties={playerDispatchProperties} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.add} />
    )).toEqual(true);
  });

  it('should render 1 or more player', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <PlayerList players={players} playerDispatchProperties={playerDispatchProperties} />
      </IntlProvider>
    );

    expect(renderedComponent.find('input').length).toBeGreaterThan(0);
  });
});
