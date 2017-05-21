/*
 * GameAdminPage
 *
 */

import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { Tabs, Tab, Button } from 'react-bootstrap';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import PlayerList from 'containers/PlayerList';

import Buttons from './Buttons';
import messages from './messages';

const GameTitle = styled.h1`
  font-size: 16px;
  padding-left: 10px;
  font-weight: bold;
  /*padding-bottom: 5px;
  width: 100%;
  border: 1px solid;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;*/
`;

class GameAdminPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    intl: intlShape.isRequired,
    gameName: PropTypes.string,
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title={formatMessage(messages.scoreTab)}>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <GameTitle>{this.props.gameName || 'my game'}</GameTitle>
              </div>
              <Buttons className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                <Button className="btn-info" title={formatMessage(messages.share)}><FontAwesome name="share-alt" /></Button>
                <Button className="btn-warning" title={formatMessage(messages.refresh)}><FontAwesome name="refresh" /></Button>
                <Button className="btn-primary" title={formatMessage(messages.addPlayer)}><FontAwesome name="user-plus" /></Button>
              </Buttons>
            </div>
            <PlayerList players={[{ score: 0 }]} />
          </Tab>
          <Tab eventKey={2} title={formatMessage(messages.setupTab)}>Tab 2 content</Tab>
          <Tab eventKey={3} title={formatMessage(messages.viewerTab)}>Tab 3 content</Tab>
          <Tab eventKey={4} title={formatMessage(messages.eventTab)}>Tab 4 content</Tab>
        </Tabs>
      </div>
    );
  }
}

export default injectIntl(GameAdminPage);
