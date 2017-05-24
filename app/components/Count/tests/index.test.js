import React from 'react';
import { mount } from 'enzyme';

import Count from '../index';

const renderComponent = (props = {}) => mount(
  <Count {...props} />
);

describe('<Count />', () => {
  it('should render a <p> tag', () => {
    const renderedComponent = renderComponent({ value: 0 });
    expect(renderedComponent.find('p').length).toEqual(1);
  });

  it('should render with a .positive className when receiving positive value prop', () => {
    const renderedComponent = renderComponent({ value: 1 });
    expect(renderedComponent.find('p').prop('className')).toMatch(/text-success/);
  });

  it('should render with a .negative className when receiving negative value prop', () => {
    const renderedComponent = renderComponent({ value: -1 });
    expect(renderedComponent.find('p').prop('className')).toMatch(/text-danger/);
  });

  it('should not render a .negative or .positive className when receiving a neutral value prop', () => {
    const renderedComponent = renderComponent({ value: 0 });
    expect(renderedComponent.find('p').prop('className')).toMatch(/[^(text\-danger|text\-success)]/);
  });

  it('should enter edit mode when clicking on the text', () => {
    const renderedComponent = renderComponent({ value: 0 });
    renderedComponent.find('p').simulate('click');

    expect(renderedComponent.find('input').length).toEqual(1);
  });

  it('should not enter edit mode when disableEditMode is true', () => {
    const renderedComponent = renderComponent({ value: 0, disableEditMode: true });
    renderedComponent.find('p').simulate('click');

    expect(renderedComponent.find('input').length).toEqual(0);
  });
});
