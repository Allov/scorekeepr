/*
 * GameAdminPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { injectIntl, intlShape } from 'react-intl';
import { Tabs, Tab, Button } from 'react-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import LoadingPanel from 'components/LoadingPanel';
import PlayerList from 'components/PlayerList';
import NotFoundPage from 'containers/NotFoundPage';

import { loadGame, gameAddPlayer, gameIncrementPlayer, gameDecrementPlayer } from './actions';

import Buttons from './Buttons';
import messages from './messages';

import { makeSelectGameId, makeSelectGame, makeSelectGameLoading, makeSelectGameNotFound } from './selectors';

const GameTitle = styled.h1`
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
`;

export const bindIndexToActionCreator =
  (actionCreator, index) =>
    (...args) =>
      Object.assign(actionCreator(...args), { index });

const playerDispatchProperties =
  (index) =>
    (dispatch) => ({
      onAddHandler() {
        dispatch(bindIndexToActionCreator(gameIncrementPlayer, index)());
      },
      onSubstractHandler() {
        dispatch(bindIndexToActionCreator(gameDecrementPlayer, index)());
      },
    });

export class GameAdminPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    intl: intlShape.isRequired,
    game: PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.bool,
    ]),
    loading: PropTypes.bool,
    onLoadGame: PropTypes.func.isRequired,
    onAddPlayer: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    notFound: PropTypes.bool,
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    this.props.onLoadGame(this.props.params.id);
  }

  render() {
    const { formatMessage } = this.props.intl;

    if (this.props.loading) {
      return (
        <LoadingPanel />
      );
    }

    if (this.props.notFound || this.props.game == null) {
      return (
        <NotFoundPage />
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
              <Button className="btn-primary" title={formatMessage(messages.addPlayer)} onClick={this.props.onAddPlayer}><FontAwesome name="user-plus" /></Button>
            </Buttons>
          </div>
          <PlayerList players={this.props.game.players} playerDispatchProperties={playerDispatchProperties} dispatch={this.props.dispatch} />
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
    onAddPlayer: () => dispatch(gameAddPlayer()),
    onPlayerActions: playerDispatchProperties,
    dispatch: dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectGameLoading(),
  notFound: makeSelectGameNotFound(),
  game: makeSelectGame(),
  gameId: makeSelectGameId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(GameAdminPage));
