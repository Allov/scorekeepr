import React from 'react';
import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';

function selectAllText(evt) {
  evt.target.select();
}

const StyledFormControl = styled(FormControl) `
  &.form-control, &.form-control[readonly] {
    background-color: transparent;
    font-weight: bold;
    color: #fff;
    border: 1px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    padding: 8px 0px;

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

const Input = (props) => (
  <StyledFormControl onFocus={selectAllText} {...props} />
);

export default Input;
