import { desc } from '../index';

describe('utils', () => {
  describe('desc comparer', () => {
    it('should return positive value when a < b', () => {
      expect(desc(1, 2)).toBe(1);
    });

    it('should return negative value when a > b', () => {
      expect(desc(2, 1)).toBe(-1);
    });

    it('should return neutral value when a == b', () => {
      expect(desc(1, 1)).toBe(0);
    });

    it('should sort an array descendingly', () => {
      const array = [1, 2, 3];
      const expectedResult = [3, 2, 1];

      expect(array.sort(desc)).toEqual(expectedResult);
    });
  });
});
