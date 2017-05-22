import React, { PropTypes } from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import FontAwesome from 'react-fontawesome';

import Player from 'components/Player';

import messages from './messages';
import Wrapper from './Wrapper';

class PlayerList extends React.Component {
  static propTypes = {
    players: PropTypes.array,
    intl: intlShape.isRequired,
  }

  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    let playerListtbody = null;
    const { formatMessage } = this.props.intl;
    if (this.props.players && this.props.players.length > 0) {
      playerListtbody = (
        <tbody>
          {this.props.players.map((player, i) => (
            <Player
              key={`player-${i}`}
              player={player}
              placeholder={formatMessage(messages.playerNamePlaceholder)}
              onAddHandler={player.addHandler}
              onSubstractHandler={player.substractHandler}
              onValueChangedHandler={player.valueChangeHandler}
            />
          ))}
        </tbody>
      );
    }

    let noPlayers = null;
    if (!this.props.players || this.props.players.length === 0) {
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
  }
}

export default injectIntl(PlayerList);
