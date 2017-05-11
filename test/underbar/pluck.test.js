const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    // Your code goes here
    const arr = [
      { name: 'John', age: 36, },
      { name: 'Victor', age: 23, },
      { name: 'Ann', age: 42, },
    ];
    expect(_.pluck(arr, 'age')).toEqual([36, 23, 42]);
  });

});
