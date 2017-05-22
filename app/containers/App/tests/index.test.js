import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import App from '../index';

describe('<App />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <App>
          {children}
        </App>
      </IntlProvider>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
