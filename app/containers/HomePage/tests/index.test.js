import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import * as router from 'react-router';

import { HomePage, mapDispatchToProps } from '../index';
import messages from '../messages';
import { createGame } from '../actions';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const renderedComponent = shallow(
      <HomePage intl={intl} />
    );

    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });

  it('should redirect to game admin page when receiving a game id', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();
    const gameId = '1234';

    router.browserHistory = { push: () => {} };
    const browserHistorySpy = spy(router.browserHistory, 'push');
    const componentWillReceivePropsSpy = spy(HomePage.prototype, 'componentWillReceiveProps');

    const wrapper = shallow(
      <HomePage intl={intl} />
    );

    wrapper.setProps({ gameId });

    expect(browserHistorySpy.calledOnce).toEqual(true);
    expect(componentWillReceivePropsSpy.calledOnce).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onCreateGame', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onCreateGame).toBeDefined();
      });

      it('should dispatch loadGame when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onCreateGame();
        expect(dispatch).toHaveBeenCalledWith(createGame());
      });
    });
  });
});
