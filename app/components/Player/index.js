import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import Count from 'components/Count';
import Input from 'components/Input';

const StyledInput = styled(Input)`
  width: 100%;
`;

export const Player = (props) => (
  <tr>
    <td><StyledInput placeholder={props.placeholder} value={props.player.name} onChange={props.onPlayerNameChanged} /></td>
    <td className="text-center"><Button className="btn-success" onClick={props.onAddHandler}><FontAwesome name="plus-circle" /></Button></td>
    <td className="text-center"><Button className="btn-danger" onClick={props.onSubstractHandler}><FontAwesome name="minus-circle" /></Button></td>
    <td className="text-center player-score-td"><Count value={props.player.score} onValueChangedHandler={props.onValueChangedHandler} /></td>
  </tr>
);

Player.propTypes = {
  player: PropTypes.object.isRequired,
  onPlayerNameChanged: PropTypes.func,
  onAddHandler: PropTypes.func,
  onSubstractHandler: PropTypes.func,
  onValueChangedHandler: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Player;
