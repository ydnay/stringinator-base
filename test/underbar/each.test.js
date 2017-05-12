const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arr = [5, 2, 8, 3, 80];
    let count = 0;
    _.each(arr, (element, index, array) => {
      expect(element).toEqual(array[index]);
      count += 1;
    });

    expect(count).toBe(5);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arrLikeObj = {
      dream: 3,
      lay: 4,
      sit: 4,
      stand: 2,
      length: 4,
    };
    let count = 0;
    _.each(arrLikeObj, (element, index, obj) => {
      expect(element).toEqual(obj[index]);
      count += 1;
    });

    expect(count).toBe(5);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    // Your code goes here
    const obj = {
      dream: 'nigthmare',
      lay: 'none',
      sit: 4,
      stand: 'all day long',
      jump: 0,
    };
    let count = 0;
    _.each(obj, (value, key, iteratedObj) => {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });

    expect(count).toBe(5);
  });
});
