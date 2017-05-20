import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import Counter from '../index';

import configureStore from '../../../store';

describe('<Counter />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({});
  });

  it('should render the page message', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <Counter counter={0} />
      </Provider>
    );

    expect(renderedComponent.find('Count').props('value')).toEqual({ value: 0 });
  });
});
