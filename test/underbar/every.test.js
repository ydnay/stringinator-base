const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      // Your code goes here
      // TODO: Test not passing
      const nums = [1, 3, 5, 8];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      const nums = [1, 3, 5, 7, 9];
      const result = _.every(nums, (elem) => elem % 2 === 1);
      expect(result).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      const nums = [1, 3, 4, 7, 9];
      const result = _.every(nums, (elem) => elem % 2 === 1);
      expect(result).toBe(false);
    });

  });
});
