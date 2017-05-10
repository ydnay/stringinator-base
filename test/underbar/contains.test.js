const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4];
    expect(_.contains(nums, 2).toBe(true));
  });

  it('returns false if an array does not contain the target', () => {
    // Your code goes here
    const nums = [1, 2, 3, 4];
    expect(_.contains(nums, 0)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here
    const songs = {
      Beatles: 'hey Jude',
      Queen: 'Bohemian Rhapsody',
      Metallica: 'One',
    };
    expect(_.contains(songs, 'One')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here
    const songs = {
      Beatles: 'hey Jude',
      Queen: 'Bohemian Rhapsody',
      Metallica: 'One',
    };
    expect(_.contains(songs, 'Beautiful People')).toBe(false);
  });

});
