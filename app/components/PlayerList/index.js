import React, { PropTypes } from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import FontAwesome from 'react-fontawesome';

import Player from 'components/Player';

import messages from './messages';
import Wrapper from './Wrapper';

export const PlayerList = (props) => {
  let playerListtbody = null;
  const { formatMessage } = props.intl;
  if (props.players && props.players.length > 0) {
    playerListtbody = (
      <tbody>
        {props.players.map((player, i) => (
          <Player
            key={`player-${i}`}
            player={player}
            placeholder={formatMessage(messages.playerNamePlaceholder)}
            {...props.playerDispatchProperties(i)(props.dispatch)}
          />
        ))}
      </tbody>
    );
  }

  let noPlayers = null;
  if (!props.players || props.players.length === 0) {
    const icon = <FontAwesome name="user-plus" />;
    noPlayers = (
      <p className="text-center text-warning">
        <FormattedMessage
          {...messages.playersEmpty}
          values={{
            icon,
          }}
        />
      </p>
    );
  }

  return (
    <Wrapper>
      <table className="table">
        <thead>
          <tr>
            <th><FormattedMessage {...messages.name} /></th>
            <th className="text-center"><FormattedMessage {...messages.add} /></th>
            <th className="text-center"><FormattedMessage {...messages.substract} /></th>
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
  intl: intlShape.isRequired,
  playerDispatchProperties: PropTypes.func,
  dispatch: PropTypes.func,
};


export default injectIntl(PlayerList);
