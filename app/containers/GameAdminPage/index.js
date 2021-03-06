/*
 * GameAdminPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindIndexToActionCreator } from 'utils/bindIndexToActionCreator';

import { injectIntl, intlShape } from 'react-intl';
import { Tabs, Tab, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import sillyname from 'sillyname';

import LoadingPanel from 'components/LoadingPanel';
import PlayerList from 'components/PlayerList';
import NotFoundPage from 'containers/NotFoundPage';
import ShareButton from 'components/ShareButton';
import GameTitle from 'components/GameTitle';

import { scorekeeprBaseUrl } from 'utils/global-config';

import {
  loadGame,
  gameAddPlayer,
  gameIncrementPlayer,
  gameDecrementPlayer,
  gameChangePlayerName,
  gameChangePlayerScore,
  resetScores,
} from './actions';

import Buttons from './Buttons';
import messages from './messages';

import { makeSelectGameId, makeSelectGame } from './selectors';
import { makeSelectLoading } from '../App/selectors';

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
    onResetScores: PropTypes.func.isRequired,
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

    const shareUrl = `${scorekeeprBaseUrl}g/${this.props.game.shareId}`;

    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title={formatMessage(messages.scoreTab)}>
          <div className="row">
            <div className="col-xs-5 col-sm-6 col-md-6 col-lg-6">
              <GameTitle>{this.props.game.name}</GameTitle>
            </div>
            <Buttons className="col-xs-7 col-sm-6 col-md-6 col-lg-6 text-right">
              <ShareButton id="share-game" title={formatMessage(messages.share)} shareUrl={shareUrl} />
              <Button className="btn-warning" title={formatMessage(messages.reset)} onClick={this.props.onResetScores}><FontAwesome name="refresh" /></Button>
              <Button className="btn-primary" title={formatMessage(messages.addPlayer)} onClick={this.props.onAddPlayer}><FontAwesome name="user-plus" /></Button>
            </Buttons>
          </div>
          <PlayerList players={this.props.game.players} playerDispatchProperties={playerDispatchProperties} dispatch={this.props.dispatch} />
        </Tab>
      </Tabs>
    );
  }
}

export const playerDispatchProperties =
  (index) =>
    (dispatch) => ({
      onAddHandler() {
        dispatch(bindIndexToActionCreator(gameIncrementPlayer, index)());
      },
      onSubstractHandler() {
        dispatch(bindIndexToActionCreator(gameDecrementPlayer, index)());
      },
      onPlayerNameChanged(evt) {
        dispatch(bindIndexToActionCreator(gameChangePlayerName, index)(evt.target.value));
      },
      onValueChangedHandler(value) {
        dispatch(bindIndexToActionCreator(gameChangePlayerScore, index)(value));
      },
    });

export function mapDispatchToProps(dispatch) {
  return {
    onLoadGame: (gameId) => dispatch(loadGame(gameId)),
    onAddPlayer: () => dispatch(gameAddPlayer(sillyname())),
    onPlayerActions: playerDispatchProperties,
    onResetScores: () => dispatch(resetScores()),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  game: makeSelectGame(),
  gameId: makeSelectGameId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(GameAdminPage));
