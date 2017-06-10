import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loading,
  loadingSuccess,
  error,
  notFound,
  dismissError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      notFound: false,
      warn: false,
      authorizationToken: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loading action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false);

    expect(appReducer(state, loading())).toEqual(expectedResult);
  });

  it('should handle the error action correctly', () => {
    const errorMessage = 'test';
    const expectedResult = state
      .set('loading', false)
      .set('error', errorMessage);

    expect(appReducer(state, error(errorMessage))).toEqual(expectedResult);
  });

  it('should handle the loadingSuccess action correctly', () => {
    const expectedResult = state
      .set('loading', false)
      .set('error', false);

    expect(appReducer(state, loadingSuccess())).toEqual(expectedResult);
  });

  it('should handle the notFound action correctly', () => {
    const expectedResult = state
      .set('loading', false)
      .set('notFound', true);

    expect(appReducer(state, notFound())).toEqual(expectedResult);
  });

  it('should handle the dismissError action correctly', () => {
    const expectedResult = state
      .set('loading', false)
      .set('error', false);

    expect(appReducer(state, dismissError())).toEqual(expectedResult);
  });
});
