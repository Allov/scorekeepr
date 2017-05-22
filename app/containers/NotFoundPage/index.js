/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import messages from './messages';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="jumbotron">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <p className="text-center"><FormattedMessage {...messages.description} /></p>
        <p className="text-center"><Link to="/games/admin" className="btn btn-primary"><FormattedMessage {...messages.createGame} /></Link></p>
      </div>
    );
  }
}
