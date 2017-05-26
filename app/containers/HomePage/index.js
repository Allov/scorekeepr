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

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import { makeSelectGameId, makeSelectHomeCreating } from './selectors';
import { createGame } from './actions';
import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    intl: intlShape.isRequired,
    onCreateGame: PropTypes.func,
  }

  componentWillReceiveProps(newProps) {
    const { gameId } = newProps;

    if (gameId) {
      browserHistory.push(`/games/${gameId}/admin/`);
    }
  }

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div className="jumbotron text-center">
        <h1><FormattedMessage {...messages.header} /></h1>
        <p><FormattedMessage {...messages.description} /></p>
        <Button bsStyle="primary" title={formatMessage(messages.create)} onClick={this.props.onCreateGame}><FormattedMessage {...messages.create} /></Button>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onCreateGame: () => dispatch(createGame()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectHomeCreating(),
  gameId: makeSelectGameId(),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage));
