import { fromJS } from 'immutable';

import {
  LOADING,
  LOADING_SUCCESS,
  ERROR,
  DISMISS_ERROR,
  NOT_FOUND,
  WARN,
  DISMISS_WARNING,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  notFound: false,
  warn: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return state.set('loading', true);
    case LOADING_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false);
    case ERROR:
      return state
        .set('loading', false)
        .set('error', action.errorMessage);
    case DISMISS_ERROR:
      return state
        .set('loading', false)
        .set('error', false);
    case NOT_FOUND:
      return state
        .set('loading', false)
        .set('error', false)
        .set('notFound', true);
    case WARN:
      return state
        .set('warn', action.warningMessage);
    case DISMISS_WARNING:
      return state
        .set('warn', false);
    default:
      return state;
  }
}

export default appReducer;
