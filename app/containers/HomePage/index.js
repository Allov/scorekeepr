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
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router';

import messages from './messages';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    intl: intlShape.isRequired,
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="jumbotron text-center">
        <h1><FormattedMessage {...messages.header} /></h1>
        <p><FormattedMessage {...messages.description} /></p>
        <Link to="/games/admin" className="btn btn-primary" title={formatMessage(messages.create)}><FormattedMessage {...messages.create} /></Link>
      </div>
    );
  }
}

export default injectIntl(HomePage);
