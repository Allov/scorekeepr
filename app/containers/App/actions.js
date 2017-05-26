import {
  LOADING,
  ERROR,
  NOT_FOUND,
  LOADING_SUCCESS,
} from './constants';

export function loading() {
  return {
    type: LOADING,
  };
}

export function error(errorMessage) {
  return {
    type: ERROR,
    errorMessage,
  };
}

export function loadingSuccess() {
  return {
    type: LOADING_SUCCESS,
  };
}

export function notFound() {
  return {
    type: NOT_FOUND,
  };
}
