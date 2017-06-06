// todo: split this file
import { eventChannel } from 'redux-saga';
import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import { scorekeeprApiBaseUrl } from 'utils/global-config';
import request from 'utils/request';

import io from 'socket.io-client';

import {
  loading,
  error,
  loadingSuccess,
  notFound,
} from '../App/actions';

import { gameLoaded } from './actions';
import {
  LOAD_GAME,
  LOAD_GAME_SUCCESS,
  ADD_PLAYER,
  INCREMENT_PLAYER,
  DECREMENT_PLAYER,
  CHANGE_PLAYER_NAME,
  CHANGE_PLAYER_SCORE,
  RESET_SCORES,
  SWITCH_GAME,
} from './constants';

import {
  makeSelectGameId,
  makeSelectGame,
} from './selectors';

// todo extract this so other sagas can use it.
function* handleError(err) {
  if (err.response && err.response.status === 404) {
    yield put(notFound());
    return;
  }

  console.error(err); // eslint-disable-line no-console
  yield put(error(err.message));
}


// load game saga
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

// /load game saga
// update game saga

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
  } catch (err) {
    yield handleError(err);
  }
}

export function* updateGameRoot() {
  const updateActions = [
    ADD_PLAYER,
    INCREMENT_PLAYER,
    DECREMENT_PLAYER,
    CHANGE_PLAYER_NAME,
    CHANGE_PLAYER_SCORE,
    RESET_SCORES,
  ];
  const watcher = yield takeLatest(updateActions, updateGame);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// /update game saga
// socket saga

function connect(id) {
  const socket = io(scorekeeprApiBaseUrl);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      socket.emit('game', id);
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('game.update', (game) => {
      emit(gameLoaded(game));
    });

    // todo: disconnect socket when unsubscribing (switching game?)
    return () => { };
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) { // eslint-disable-line no-constant-condition
    const action = yield take(channel);
    yield put(action);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
}

function* flow() {
  while (true) { // eslint-disable-line no-constant-condition
    // wait for the game to initiate connection with the socket.
    // once we get the
    yield take(LOAD_GAME_SUCCESS);
    yield put(loading());
    const game = yield select(makeSelectGame());
    const socket = yield call(connect, game.id);

    const task = yield fork(handleIO, socket);
    yield put(loadingSuccess());

    // implement SWITCH_GAME / SWITCHING_GAME to switch over another game (leaving the current one)
    yield take(SWITCH_GAME);
    yield cancel(task);
  }
}

function* flowRoot() {
  yield fork(flow);
}

// /socket saga

// Bootstrap sagas
export default [
  loadGameRoot,
  updateGameRoot,
  flowRoot,
];
