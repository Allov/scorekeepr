import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { scorekeeprApiBaseUrl } from 'utils/global-config';
import request from 'utils/request';

import { sharedGameLoaded, sharedGameLoadingError } from './actions';
import { LOAD_SHARED_GAME } from './constants';

import { makeSelectSharedGameId } from './selectors';

function* handleError(err) {
  console.log(err); // eslint-disable-line no-console

  // if (err.response && err.response.status === 404) {
  //   yield put(gameNotFound());
  // }

  yield put(sharedGameLoadingError(err));
}

export function* loadFromShareId() {
  const shareId = yield select(makeSelectSharedGameId());
  const requestURL = `${scorekeeprApiBaseUrl}api/games/search-by-share/${shareId}`;

  try {
    const game = yield call(request, requestURL);

    yield put(sharedGameLoaded(game));
  } catch (err) {
    handleError(err);
  }
}

export function* loadFromShareRoot() {
  const watcher = yield takeLatest(LOAD_SHARED_GAME, loadFromShareId);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  loadFromShareRoot,
];
