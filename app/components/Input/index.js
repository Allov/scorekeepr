import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

function selectAllText(evt) {
  evt.target.select();
}

const StyledFormControl = styled(FormControl)`
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
`;

const Input = (props) => (
  <FormGroup className="pull-left" {...props}>
    <StyledFormControl onFocus={selectAllText} {...props} />
  </FormGroup>
);

export default Input;
