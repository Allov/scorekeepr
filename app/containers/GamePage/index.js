import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { injectIntl, intlShape } from 'react-intl';
import { Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';

import LoadingPanel from 'components/LoadingPanel';
import PlayerListReadOnly from 'components/PlayerListReadOnly';

import { loadSharedGame } from './actions';
import messages from './messages';

import { makeSelectSharedGameId, makeSelectSharedGame, makeSelectSharedGameLoading, makeSelectSharedGameLoadingError } from './selectors';

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
    loading: PropTypes.bool,
    onLoadSharedGame: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.onLoadSharedGame(this.props.params.shareId);
  }

  render() {
    const { formatMessage } = this.props.intl;

    if (this.props.loading) {
      return (
        <LoadingPanel />
      );
    }

    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title={formatMessage(messages.scoreTab)}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <GameTitle>{this.props.game.name}</GameTitle>
            </div>
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
    onLoadSharedGame: (sharedId) => dispatch(loadSharedGame(sharedId)),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectSharedGameLoading(),
  error: makeSelectSharedGameLoadingError(),
  game: makeSelectSharedGame(),
  gameId: makeSelectSharedGameId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(GamePage));
