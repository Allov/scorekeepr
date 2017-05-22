import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { scorekeeprApiBaseUrl } from 'utils/globalConfig';
import request from 'utils/request';

import { gameLoaded, gameNotFound, gameLoadingError } from './actions';
import { LOAD_GAME } from './constants';

import { makeSelectGameId } from './selectors';

export function* loadGame() {
  const gameId = yield select(makeSelectGameId());
  const requestURL = `${scorekeeprApiBaseUrl}api/games/${gameId}`;

  try {
    const game = yield call(request, requestURL);

    yield put(gameLoaded(game));
  } catch (err) {
    if (err.response.status === 404) {
      yield put(gameNotFound());
    }

    yield put(gameLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* createGameRoot() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_GAME, loadGame);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  createGameRoot,
];
