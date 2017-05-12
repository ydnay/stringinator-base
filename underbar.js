// Returns the given value. Seems pointless perhaps but see its use below for
// providing a default, no-op callback.
const identity = function (val) {
  // Your code goes here
  return val;
};

// Returns the first n elements of the given array.
const first = function (array, n = 1) {
  // Your code goes here
  return array.slice(0, n);
};

// Returns the last n elements of the given array.
const last = function (array, n = 1) {
  // Your code goes here
  return array.slice(-n);
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function (array, target, fromIndex=0) {
  // Your code goes here
  for (let index = fromIndex; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }

  return -1;
};

const isArrayLike = function (obj) {
  // Your code goes here
  const length = obj['length'];
  return typeof length === 'number' && length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a
// callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function (obj, callback=identity) {
  // Your code goes here
  const values = Array.isArray(obj) ? obj : Object.values(obj);
  for (var i = 0; i < values.length; i++) {
    callback(values[i], i, values);
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function (obj, callback=identity) {
  // Your code goes here
  let result = [];
  const values = Array.isArray(obj) ? obj : Object.values(obj);
  each(values, (elem) => {
    result.push(callback(elem));
  });

  return result;
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function (obj, key) {
  // Your code goes here
  return map(obj, function (elem) {
    return elem[key];
  });
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function (obj, callback=identity, initialValue) {
  // Your code goes here
  let accumulator;
  if (initialValue === undefined) {accumulator = 0;} else {accumulator = initialValue;}

  each(obj, (elem) => {
    accumulator = callback(elem, accumulator);
  });

  return accumulator;
};

// Return true if the object contains the target.
const contains = function (obj, target) {
  // Your code goes here
  const values = Array.isArray(obj) ? obj : Object.values(obj);
  return indexOf(values, target) !== -1;
};

// Return true if all the elements / object values are accepted by the callback.
const every = function (obj, callback=identity) {
  // Your code goes here
  return reduce(obj, function (currentVal, accumulator) {
    return !!callback(currentVal) && accumulator;
  }, true);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function (obj, callback=identity) {
  // Your code goes here
  return reduce(obj, function (currentVal, accumulator) {
    return accumulator || !!callback(currentVal);
  }, false);
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function (obj, callback=identity) {
  // Your code goes here
  let res = [];
  each(obj, (elem) => {
    if (callback(elem)) {
      res.push(elem);
    }
  });

  return res;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function (arr, callback=identity) {
  // Your code goes here
  return filter(arr, (item) => !callback(item));
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function (obj) {
  // Your code goes here
  let res = [];
  let set = {};
  each(obj, (elem) => {
    if (!(elem in set)) {
      set[elem] = elem;
      res.push(elem);
    }
  });

  return res;
};

module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq,
};
