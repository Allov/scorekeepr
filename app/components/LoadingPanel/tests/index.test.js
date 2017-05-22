import React from 'react';
import { mount } from 'enzyme';

import FontAwesome from 'react-fontawesome';

import LoadingPanel from '../index';

describe('<LoadingPanel />', () => {
  it('should render the LoadingPanel component', () => {
    const renderedComponent = mount(
      <LoadingPanel />
    );

    expect(renderedComponent.contains(<FontAwesome name="gear" size="3x" spin />)).toBe(true);
  });
});
