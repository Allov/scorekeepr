import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Button from 'components/Button';
import Count from 'components/Count';

import Wrapper from './Wrapper';

export const Counter = (props) => (
  <Wrapper>
    <Button>+</Button>
    <Button>-</Button>
    <Count value={props.counter} />
  </Wrapper>
);

Counter.propTypes = {
  counter: PropTypes.number,
};

const mapStateToProps = createSelector(
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
