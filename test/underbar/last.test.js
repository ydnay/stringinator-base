const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    // Your code goes here
    const nums = [10, 20, 30, 40];
    expect(_.last(nums)).toEqual([40]);
  });

  it('returns the last 2 elements of an array', () => {
    // Your code goes here
    const nums = [10, 20, 30, 40];
    expect(_.last(nums, 2)).toEqual([30, 40]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    // Your code goes here
    const nums = [10, 20, 30, 40];
    expect(_.last(nums, 19)).toEqual([10, 20, 30, 40]);
  });
});
