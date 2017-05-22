import React from 'react';
import { mount } from 'enzyme';

import Player from '../index';

describe('<Player />', () => {
  it('should render the Player component', () => {
    const renderedComponent = mount(
      <table>
        <tbody>
          <Player player={{ score: 0 }} />
        </tbody>
      </table>
    );

    expect(renderedComponent.find('input').length).toBe(1);
  });
});
