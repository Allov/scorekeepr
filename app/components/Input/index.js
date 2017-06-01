import React, { PropTypes } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

function selectAllText(evt) {
  evt.target.select();
}

const StyledFormControl = styled(FormControl)`
  &.form-control {
    background-color: transparent;
    font-weight: bold;
    color: #fff;
    border: 1px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;

    &:focus {
      border: 1px solid #fff;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
    }

    &::selection {
      color: white;
      background: #df691a;
    }
  }
`;

const Input = (props) => {
  const { validationState, ...otherProps } = props;
  return (
    <FormGroup className="pull-left" validationState={validationState} {...otherProps}>
      <StyledFormControl onFocus={selectAllText} {...otherProps} />
    </FormGroup>
  );
};

Input.propTypes = {
  validationState: PropTypes.string,
};

export default Input;
