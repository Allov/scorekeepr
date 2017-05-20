import React, { PropTypes, Children } from 'react';
import StyledButton from './StyledButton';

function Button(props) {
  return (
    <StyledButton onClick={props.onClick}>
      {Children.toArray(props.children)}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
