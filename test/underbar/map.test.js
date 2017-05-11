const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    // Your code goes here
    const nums = [2, 5, 6, 9];
    const mapOutputArr = _.map(nums, (element) =>
      element * element);
    expect(mapOutputArr).toEqual([4, 25, 36, 81]);
  });
});
