const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    // Your code goes here
    const arr = [8, 5, 3, 2];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    // Your code goes here
    const arrLikeObj = {
      sit: 4,
      stand: 2,
      length: 3,
    };
    expect(_.isArrayLike(arrLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    // Your code goes here
    const nonArrLikeObj = {
      sit: 4,
      stand: 2,
      notLength: 3,
    };
    expect(_.isArrayLike(nonArrLikeObj)).toBe(false);
  });
});
