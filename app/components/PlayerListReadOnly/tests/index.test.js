import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { mount } from 'enzyme';

import PlayerListReadOnly from '../index';
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

describe('<PlayerListReadOnlyReadOnly />', () => {
  it('should render the page message', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <PlayerListReadOnly />
      </IntlProvider>
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.playersEmpty} />
    )).toEqual(true);
  });

  it('should render 1 or more player', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <PlayerListReadOnly players={players} />
      </IntlProvider>
    );

    expect(renderedComponent.find('tbody').length).toBeGreaterThan(0);
  });
});
