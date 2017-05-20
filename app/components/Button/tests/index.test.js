import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => mount(
  <Button {...props}>
    {children}
  </Button>
);

describe('<Button />', () => {
  it('should render a <button> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
