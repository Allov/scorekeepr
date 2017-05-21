import React from 'react';
import { mount } from 'enzyme';

import Input from '../index';

describe('<Input />', () => {
  it('should render the input component', () => {
    const renderedComponent = mount(
      <Input />
    );

    expect(renderedComponent.find('input').length).toBe(1);
  });

  it('should select text onFocus', () => {
    const onChangeSpy = jest.fn();
    const renderedComponent = mount(
      <Input onChange={onChangeSpy} value="test" />
    );

    const input = renderedComponent.find('input');
    input.simulate('focus');

    expect(input.node.selectionEnd).toBe(4);
  });
});
