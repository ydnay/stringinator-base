const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    // Your code goes here\
    const nums = [2, 4, 6, 8, 9];
    const result = _.some(nums, (elem) => elem % 2 === 1);
    expect(result).toBe(true);
  });

  it('returns false if no number is odd', () => {
    // Your code goes here
    const nums = [2, 4, 6, 8, 200];
    const result = _.some(nums, (elem) => elem % 2 === 1);
    expect(result).toBe(false);
  });

});
