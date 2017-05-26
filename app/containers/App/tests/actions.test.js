import {
  LOADING,
  ERROR,
  LOADING_SUCCESS,
  NOT_FOUND,
} from '../constants';

import {
  loading,
  error,
  loadingSuccess,
  notFound,
} from '../actions';

describe('App Actions', () => {
  describe('loading', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOADING,
      };

      expect(loading()).toEqual(expectedResult);
    });
  });

  describe('loadingError', () => {
    it('should return the correct type', () => {
      const errorMessage = 'test';
      const expectedResult = {
        type: ERROR,
        errorMessage,
      };

      expect(error(errorMessage)).toEqual(expectedResult);
    });
  });

  describe('loadingSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOADING_SUCCESS,
      };

      expect(loadingSuccess()).toEqual(expectedResult);
    });
  });

  describe('notFound', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: NOT_FOUND,
      };

      expect(notFound()).toEqual(expectedResult);
    });
  });
});
