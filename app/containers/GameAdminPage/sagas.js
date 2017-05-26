import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { scorekeeprApiBaseUrl } from 'utils/globalConfig';
import request from 'utils/request';

import { loading, error, loadingSuccess, notFound } from '../App/actions';

import { gameLoaded, loadGame as loadGameAction } from './actions';
import { LOAD_GAME, ADD_PLAYER, INCREMENT_PLAYER, DECREMENT_PLAYER } from './constants';

import { makeSelectGameId, makeSelectGame } from './selectors';

function* handleError(err) {
  if (err.response && err.response.status === 404) {
    yield put(notFound());
    return;
  }

  console.error(err); // eslint-disable-line no-console
  yield put(error(err.message));
}

export function* loadGame() {
  const gameId = yield select(makeSelectGameId());
  const requestURL = `${scorekeeprApiBaseUrl}api/games/${gameId}`;

  try {
    yield put(loading());
    const game = yield call(request, requestURL);

    yield put(loadingSuccess(game));
    yield put(gameLoaded(game));
  } catch (err) {
    yield handleError(err);
  }
}

export function* loadGameRoot() {
  const watcher = yield takeLatest(LOAD_GAME, loadGame);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* updateGame() {
  const game = yield select(makeSelectGame());
  const requestURL = `${scorekeeprApiBaseUrl}api/games/${game.id}`;

  try {
    // PUT the whole game object to the game ressource.
    yield call(request, requestURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(game),
    });

    yield put(loadGameAction(game.id));
  } catch (err) {
    yield handleError(err);
  }
}

export function* updateGameRoot() {
  const watcher = yield takeLatest([ADD_PLAYER, INCREMENT_PLAYER, DECREMENT_PLAYER], updateGame);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  loadGameRoot,
  updateGameRoot,
];
