const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    // Your code goes here
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    // Your code goes here
    expect(_.identity(2)).toBe(2);
  });

  it('returns the same array if given an array', () => {
    // Your code goes here
    const array = [1, 2, 3];
    expect(_.identity(array)).toBe(array);
  });

  it('returns the same object if given an object', () => {
    // Your code goes here
    const obj = { 0: 'nobody lives here' };
    expect(_.identity(obj)).toBe(obj);
  });
});
