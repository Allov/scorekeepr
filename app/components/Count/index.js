import React, { PropTypes } from 'react';
import StyledP from './StyledP';

function Count(props) {
  let value = props.value;
  let className = '';
  if (value > 0) {
    value = `+${props.value}`;
    className = 'positive';
  } else if (value < 0) {
    value = `-${Math.abs(props.value)}`;
    className = 'negative';
  }

  return (
    <StyledP className={className}>
      {value}
    </StyledP>
  );
}

Count.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Count;
