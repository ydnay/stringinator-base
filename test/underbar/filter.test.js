const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = _.filter(nums, (elem) => elem % 2 === 1);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  it('filters an object to only numeric values', () => {
    // Your code goes here
    const obj = {
      name: 'John',
      last: 'Smith',
      mother: 'Lucy',
      age: 34,
      children: 1,
    };
    const result = _.filter(obj, (val) => typeof (val) === 'number');
    expect(result).toEqual([34, 1]);
  });
});
