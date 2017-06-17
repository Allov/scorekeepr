/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import localforage from 'localforage';
import { setAuthorizationToken } from 'containers/App/actions';
import { SET_AUTHORIZATION_TOKEN } from 'containers/App/constants';
import { LOAD_GAME_SUCCESS } from 'containers/GameAdminPage/constants';

import createReducer from './reducers';


const sagaMiddleware = createSagaMiddleware();

// get this out so it can be tested.
const persistAuthorizationToken = ({ dispatch }) => (next) => (action) => {
  const nextAction = next(action);
  if (nextAction.type === SET_AUTHORIZATION_TOKEN) {
    localforage.setItem('authorizationToken', nextAction.authorizationToken);
  }

  if (nextAction.type === LOAD_GAME_SUCCESS) {
    localforage
      .getItem('authorizationToken')
      .then((authorizationToken) => {
        if (authorizationToken) {
          dispatch(setAuthorizationToken(authorizationToken));
        }
      });
  }

  return nextAction;
};

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    persistAuthorizationToken,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
