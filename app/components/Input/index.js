import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

function selectAllText(evt) {
  evt.target.select();
}

const Input = (props) => (
  <FormGroup className="pull-left">
    <FormControl type="text" onFocus={selectAllText} {...props} />
  </FormGroup>
);

export default Input;
