import { fromJS } from 'immutable';

import { makeSelectLocationState, makeSelectLoading, makeSelectError, makeSelectNotFound } from 'containers/App/selectors';

describe('makeSelectLocationState', () => {
  describe('makeSelectLoading', () => {
    const loadingSelector = makeSelectLoading();
    it('should select the loading', () => {
      const loading = false;
      const mockedState = fromJS({
        global: {
          loading,
        },
      });
      expect(loadingSelector(mockedState)).toEqual(loading);
    });
  });

  describe('makeSelectError', () => {
    const errorSelector = makeSelectError();
    it('should select the error', () => {
      const error = 404;
      const mockedState = fromJS({
        global: {
          error,
        },
      });
      expect(errorSelector(mockedState)).toEqual(error);
    });
  });

  describe('makeSelectNotFound', () => {
    const errorSelector = makeSelectNotFound();
    it('should select the error', () => {
      const notFound = false;
      const mockedState = fromJS({
        global: {
          notFound,
        },
      });
      expect(errorSelector(mockedState)).toEqual(notFound);
    });
  });

  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(makeSelectLocationState()(mockedState)).toEqual(route.toJS());
  });

  it('should return cached js routeState for same concurrent calls', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    const selectLocationState = makeSelectLocationState();

    const firstRouteStateJS = selectLocationState(mockedState);
    expect(selectLocationState(mockedState)).toBe(firstRouteStateJS);
  });
});
