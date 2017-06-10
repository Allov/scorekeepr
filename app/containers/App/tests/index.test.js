import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider, FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import LoadingPanel from 'components/LoadingPanel';
import NotFound from 'containers/NotFoundPage';

import { App, mapDispatchToProps } from '../index';
import { dismissError } from '../actions';
import messages from '../messages';

describe('<App />', () => {
  it('should render the header', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const renderedComponent = shallow(
      <App intl={intl} />
    );
    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toBe(true);
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const renderedComponent = shallow(
      <App intl={intl}>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should display a loading panel.', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();
    const { formatMessage } = intl;

    const renderedComponent = shallow(
      <App intl={intl} loading />
    );
    expect(renderedComponent.contains(<LoadingPanel message={formatMessage(messages.loading)} />)).toBe(true);
  });

  it('should display an error message.', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const renderedComponent = shallow(
      <App intl={intl} error />
    );
    expect(renderedComponent.contains(<FormattedHTMLMessage {...messages.error} />)).toBe(true);
  });

  it('should display a NotFound message', () => {
    const intlProvider = new IntlProvider({ locale: 'en' }, {});
    const { intl } = intlProvider.getChildContext();

    const renderedComponent = shallow(
      <App intl={intl} notFound />
    );
    expect(renderedComponent.contains(<NotFound />)).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onDismissError', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onDismissError).toBeDefined();
      });

      it('should dispatch loadGame when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onDismissError();
        expect(dispatch).toHaveBeenCalledWith(dismissError());
      });
    });
  });
});
