import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Player from 'components/Player';

import messages from './messages';
import Wrapper from './Wrapper';
import Buttons from './Buttons';

class PlayerList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    let tbody = null;
    if (this.props.players && this.props.players.length > 0) {
      tbody = (
        <tbody>
          {this.props.players.map((player, i) => (
            <Player
              key={`player-${i}`}
              player={player}
              placeholder={messages.playerNamePlaceholder.defaultMessage}
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
      <Wrapper className="container-fluid">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <FormGroup>
              <FormControl type="text" placeholder={messages.gameNamePlaceholder.defaultMessage} />
            </FormGroup>
          </div>
          <Buttons className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
            <Button className="btn-info"><FontAwesome name="share-alt" /></Button>
            <Button className="btn-warning"><FontAwesome name="refresh" /></Button>
            <Button className="btn-primary"><FontAwesome name="user-plus" /></Button>
          </Buttons>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th><FormattedMessage {...messages.name} /></th>
              <th className="text-center"><FormattedMessage {...messages.add} /></th>
              <th className="text-center"><FormattedMessage {...messages.substract} /></th>
              <th className="text-center"><FormattedMessage {...messages.score} /></th>
            </tr>
          </thead>
          {tbody}
        </table>
        {noPlayers}
      </Wrapper>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array,
};

export default PlayerList;
