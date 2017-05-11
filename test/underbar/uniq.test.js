const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    // Your code goes here
    const nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 5, 5];
    expect(_.uniq(nums)).toEqual([1, 2, 3, 4, 5]);
  });
});
