const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4, 5, 6];
    const result = _.reject(nums, (elem) => elem % 2 !== 1);
    expect(result).toEqual([1, 3, 5]);
  });

  it('rejects null values from an object', () => {
    // Your code goes here
    const songs = { hey: 'Jude', letit: 'Be', titleless: null, };
    const result = _.reject(songs, (val) => val === null);
    expect(result).toEqual(['Jude', 'Be']);
  });
});
