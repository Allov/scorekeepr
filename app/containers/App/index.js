/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Navbar } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import messages from './messages';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    intl: intlShape.isRequired,
  };

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div>
        <Navbar bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" title={messages.header}><FontAwesome name="gamepad" /> <FormattedMessage {...messages.header} /></Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="container">
          {React.Children.toArray(this.props.children)}
        </div>
        <footer className="footer">
          <div className="container">
            <p className="text-right">
              <a href="https://github.com/allov/scorekeepr.io" title={formatMessage(messages.github)}><FontAwesome name="github" size="2x" /></a>
              <a href="https://twitter.com/ScorekeeprIO" title={formatMessage(messages.twitter)}><FontAwesome name="twitter" size="2x" /></a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default injectIntl(App);
