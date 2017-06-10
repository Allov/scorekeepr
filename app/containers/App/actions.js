import {
  LOADING,
  LOADING_SUCCESS,
  ERROR,
  DISMISS_ERROR,
  NOT_FOUND,
  WARN,
  DISMISS_WARNING,
  SET_AUTHORIZATION_TOKEN,
} from './constants';

export function loading() {
  return {
    type: LOADING,
  };
}

export function loadingSuccess() {
  return {
    type: LOADING_SUCCESS,
  };
}

export function error(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

export function dismissError() {
  return {
    type: DISMISS_ERROR,
  };
}

export function notFound() {
  return {
    type: NOT_FOUND,
  };
}

export function warn(warningMessage) {
  return {
    type: WARN,
    warningMessage,
  };
}

export function dismissWarning() {
  return {
    type: DISMISS_WARNING,
  };
}

export function setAuthorizationToken(authorizationToken) {
  return {
    type: SET_AUTHORIZATION_TOKEN,
    authorizationToken,
  };
}
