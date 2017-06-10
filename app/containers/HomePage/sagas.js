import { take, call, put, cancel, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { scorekeeprBaseUrl } from 'utils/global-config';
import request from 'utils/request';

import { gameCreated } from './actions';
import { error, setAuthorizationToken } from '../App/actions';
import { makeSelectAuthorizationToken } from '../App/selectors';
import { CREATE_GAME } from './constants';

export function* createGame() {
  const requestURL = `${scorekeeprBaseUrl}api/games`;

  try {
    const authorizationToken = yield select(makeSelectAuthorizationToken());

    const headers = {};
    if (authorizationToken) {
      headers.authorization = `Bearer ${authorizationToken}`;
    }

    const newGame = yield call(request, requestURL, {
      method: 'POST',
      headers,
    });

    yield put(gameCreated(newGame.id));
    yield put(setAuthorizationToken(newGame.token));
  } catch (err) {
    yield put(error(err.message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* createGameRoot() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(CREATE_GAME, createGame);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  createGameRoot,
];
