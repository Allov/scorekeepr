import { bindIndexToActionCreator } from '../bindIndexToActionCreator';

describe('bindIndexToActionCreator', () => {
  it('should contain action creator', () => {
    const actionCreator = () => ({});
    const index = 1;
    const result = Object.assign(actionCreator(), { index });

    const actual = bindIndexToActionCreator(actionCreator, 1)();

    expect(actual).toEqual(result);
  });
});
