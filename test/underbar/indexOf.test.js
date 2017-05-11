const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    // Your code goes here
    const ind = ['index 0', 'index 1', 'index 2', 'index 3', 'index 4'];
    expect(_.indexOf(ind, 'index 0')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    // Your code goes here
    const ind = ['index 0', 'index 1', 'index 2', 'index 3', 'index 4'];
    expect(_.indexOf(ind, 'index 4')).toBe(4);
  });

  it('returns -1 for a missing value', () => {
    // Your code goes here
    const ind = ['index 0', 'index 1', 'index 2', 'index 3', 'index 4'];
    expect(_.indexOf(ind, 'not there')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    // Your code goes here
    const ind = ['index 0', 'index 0', 'index 0', 'index 0', 'index 0'];
    expect(_.indexOf(ind, 'index 0')).toBe(0);
  });

  it('starts searching at the given offset', () => {
    // Your code goes here
    const ind = ['index 0', 'index 1', 'index 2', 'index 3', 'index 4'];
    expect(_.indexOf(ind, 'index 3', 2)).toBe(3);
  });
});
