/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Navbar, Tabs, Tab } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import PlayerList from 'containers/PlayerList';

import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navbar bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" title={messages.header}><FontAwesome name="gamepad" /> <FormattedMessage {...messages.header} /></a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="container">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Scores">
              <PlayerList />
            </Tab>
            <Tab eventKey={2} title="Setup">Tab 2 content</Tab>
            <Tab eventKey={3} title="Viewer's view">Tab 3 content</Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
