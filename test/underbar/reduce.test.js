const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const nums = [3, 4, 6, 7];
    const result = _.reduce(nums, (acc, num) => acc + num, 11);
    expect(result).toBe(31);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    // Your code goes here
    const nums = [6, 3, 1, 19];
    const result = _.reduce(nums, (acc, num) => acc + num);
    expect(result).toBe(29);
  });

});
