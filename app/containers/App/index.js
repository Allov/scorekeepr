import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Navbar, Alert, Label } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import LoadingPanel from 'components/LoadingPanel';
import NotFound from 'containers/NotFoundPage';

import {
  dismissError,
  dismissWarning,
} from './actions';

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectNotFound,
  makeSelectWarn,
} from './selectors';
import messages from './messages';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    intl: intlShape.isRequired,
    loading: PropTypes.bool,
    notFound: PropTypes.bool,
    onDismissError: PropTypes.func,
    onDismissWarning: PropTypes.func,
    error: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool,
    ]),
    warn: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool,
    ]),
  };

  render() {
    const { formatMessage } = this.props.intl;

    let loading = null;
    if (this.props.loading) {
      loading = <LoadingPanel message={formatMessage(messages.loading)} />;
    }

    let errorAlert = null;
    if (this.props.error) {
      errorAlert = <Alert bsStyle="danger" onDismiss={this.props.onDismissError}><FormattedMessage {...messages.error} /></Alert>;
    }

    let warnAlert = null;
    if (this.props.warn) {
      warnAlert = <Alert bsStyle="warning" onDismiss={this.props.onDismissWarning}>{this.props.warn}</Alert>;
    }

    let content = (
      <div className="container main-container">
        {React.Children.toArray(this.props.children)}
        {loading}
      </div>
    );

    if (this.props.notFound) {
      content = (
        <div className="container main-container">
          <NotFound />
        </div>
      );
    }

    return (
      <div>
        <Navbar bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" title={formatMessage(messages.header)}><FontAwesome name="gamepad" /> <FormattedMessage {...messages.header} /><Label bsStyle="warning">alpha</Label></Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        {errorAlert}
        {warnAlert}
        {content}
        <footer className="footer">
          <div className="container">
            <p className="pull-left">
              <Link to="/terms-and-conditions" title={formatMessage(messages.termsAndConditions)}> <FormattedMessage {...messages.termsAndConditions} /> </Link>
            </p>
            <p className="text-right pull-right">
              <a href="https://github.com/allov/scorekeepr.io" target="_blank" title={formatMessage(messages.github)}><FontAwesome name="github" size="2x" /></a>
              <a href="https://twitter.com/ScorekeeprIO" target="_blank" title={formatMessage(messages.twitter)}><FontAwesome name="twitter" size="2x" /></a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onDismissError: () => dispatch(dismissError()),
    onDismissWarning: () => dispatch(dismissWarning()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  notFound: makeSelectNotFound(),
  warn: makeSelectWarn(),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(App));
