const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4];
    expect(_.first(nums, 1)).toEqual([1]);
  });

  it('returns the first 2 elements of an array', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4];
    expect(_.first(nums, 2)).toEqual([1, 2]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4];
    expect(_.first(nums, 8)).toEqual([1, 2, 3, 4]);
  });
});
