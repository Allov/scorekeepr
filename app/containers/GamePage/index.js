import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { injectIntl, intlShape } from 'react-intl';
import { Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';

import PlayerListReadOnly from 'components/PlayerListReadOnly';
import ShareButton from 'components/ShareButton';

import { scorekeeprBaseUrl } from 'utils/global-config';

import messages from './messages';

import { loadGame } from '../GameAdminPage/actions';
import { makeSelectGame, makeSelectGameId } from '../GameAdminPage/selectors';

import Buttons from '../GameAdminPage/Buttons';

const GameTitle = styled.h1`
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
`;

export class GamePage extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    game: PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.bool,
    ]),
    onLoadGame: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.onLoadGame(this.props.params.id);
  }

  render() {
    const { formatMessage } = this.props.intl;

    const shareUrl = `${scorekeeprBaseUrl}g/${this.props.game.shareId}`;

    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title={formatMessage(messages.scoreTab)}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <GameTitle>{this.props.game.name}</GameTitle>
            </div>
            <Buttons className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
              <ShareButton id="share-game" title={formatMessage(messages.share)} shareUrl={shareUrl} />
            </Buttons>
          </div>
          <PlayerListReadOnly players={this.props.game.players} />
        </Tab>
        <Tab eventKey={2} title={formatMessage(messages.eventTab)}>Tab 2 content</Tab>
      </Tabs>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadGame: (id) => dispatch(loadGame(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  game: makeSelectGame(),
  gameId: makeSelectGameId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(GamePage));
