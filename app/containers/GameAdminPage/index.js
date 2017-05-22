/*
 * GameAdminPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { browserHistory } from 'react-router';
import { injectIntl, intlShape } from 'react-intl';
import { Tabs, Tab, Button } from 'react-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import LoadingPanel from 'components/LoadingPanel';
import PlayerList from 'components/PlayerList';

import { loadGame } from './actions';

import Buttons from './Buttons';
import messages from './messages';

import { makeSelectGameId, makeSelectGame, makeSelectGameLoading, makeSelectGameNotFound } from './selectors';

const GameTitle = styled.h1`
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
`;

export class GameAdminPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    intl: intlShape.isRequired,
    game: PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.bool,
    ]),
    loading: PropTypes.bool,
    onLoadGame: PropTypes.func,
    params: PropTypes.object,
  }

  componentWillMount() {
    this.props.onLoadGame(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    const { notFound } = newProps;

    if (notFound) {
      // not found
    }
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
              <GameTitle>{this.props.game.name || 'my game'}</GameTitle>
            </div>
            <Buttons className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
              <Button className="btn-info" title={formatMessage(messages.share)}><FontAwesome name="share-alt" /></Button>
              <Button className="btn-warning" title={formatMessage(messages.refresh)}><FontAwesome name="refresh" /></Button>
              <Button className="btn-primary" title={formatMessage(messages.addPlayer)}><FontAwesome name="user-plus" /></Button>
            </Buttons>
          </div>
          <PlayerList players={this.props.game.players} />
        </Tab>
        <Tab eventKey={2} title={formatMessage(messages.setupTab)}>Tab 2 content</Tab>
        <Tab eventKey={3} title={formatMessage(messages.viewerTab)}>Tab 3 content</Tab>
        <Tab eventKey={4} title={formatMessage(messages.eventTab)}>Tab 4 content</Tab>
      </Tabs>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadGame: (gameId) => dispatch(loadGame(gameId)),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectGameLoading(),
  notFound: makeSelectGameNotFound(),
  game: makeSelectGame(),
  gameId: makeSelectGameId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(GameAdminPage));
