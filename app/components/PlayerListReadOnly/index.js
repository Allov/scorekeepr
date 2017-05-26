import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Wrapper from 'components/Wrapper';
import Count from 'components/Count';

import { desc } from 'utils';

import messages from './messages';

const StyledPlayerName = styled.td`
  font-size: 30px;
  font-weight: 600;
`;

export const PlayerList = (props) => {
  let playerListtbody = null;

  if (props.players && props.players.length > 0) {
    playerListtbody = (
      <tbody>
        {props.players.sort(desc).map((player, i) => (
          <tr key={`player-${i}`}>
            <StyledPlayerName>{player.name}</StyledPlayerName>
            <td className="text-center"><Count value={player.score} disableEditMode /></td>
          </tr>
        ))}
      </tbody>
    );
  }

  let noPlayers = null;
  if (!props.players || props.players.length === 0) {
    noPlayers = (
      <p className="text-center">
        <FormattedMessage {...messages.playersEmpty} />
      </p>
    );
  }

  return (
    <Wrapper>
      <table className="table">
        <thead>
          <tr>
            <th><FormattedMessage {...messages.name} /></th>
            <th className="text-center"><FormattedMessage {...messages.score} /></th>
          </tr>
        </thead>
        {playerListtbody}
      </table>
      {noPlayers}
    </Wrapper>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array,
};


export default PlayerList;
