import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectNotFound = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('notFound')
);

const makeSelectWarn = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('warn')
);

const makeSelectAuthorizationToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('authorizationToken')
);

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectError,
  makeSelectLoading,
  makeSelectNotFound,
  makeSelectWarn,
  makeSelectAuthorizationToken,
  makeSelectLocationState,
};
