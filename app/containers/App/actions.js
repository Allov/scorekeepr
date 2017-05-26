import {
  LOADING,
  LOADING_SUCCESS,
  ERROR,
  DISMISS_ERROR,
  NOT_FOUND,
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
