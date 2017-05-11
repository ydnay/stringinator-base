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
  let pos = -1;
  for (let index = fromIndex; index < array.length; index++) {
    if (array[index] === target) {
      pos = index;
    }
  }

  return pos;
};

const isArrayLike = function (obj) {
  // Your code goes here
  // TODO: check if obj is an array or if obj.len is defined
  const length = obj[length];
  return typeof length === 'number' && length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a
// callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function (obj, callback=identity) {
  // Your code goes here
  for (var i = 0; i < obj.length; i++) {
    callback(obj[i], i, obj);
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function (obj, callback=identity) {
  // Your code goes here
  let result = [];
  for (var i = 0; i < obj.length; i++) {
    result.push(callback(obj[i], i, obj));
  }

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
  let accumulator = initialValue;
  each(obj, (elem) => {
    accumulator = callback(elem, accumulator);
  });

  return accumulator;
};

// Return true if the object contains the target.
const contains = function (obj, target) {
  // Your code goes here
  let res = indexOf(obj, target);
  return res !== -1 ? true : false;
};

// Return true if all the elements / object values are accepted by the callback.
const every = function (obj, callback=identity) {
  // Your code goes here
  // TODO: make it stop if callback updates to false
  let res = true;
  for (var i = 0; i < obj.length; i++) {
    res = callback(obj[i]);
    if (res === false) {return false;}
  }

  return res;
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function (obj, callback=identity) {
  // Your code goes here
  let res = false;
  for (var i = 0; i < obj.length; i++) {
    res = callback(obj[i]);
    if (res === true) {return true;}
  }

  return res;
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
  return filter(arr, callback);
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function (obj) {
  // Your code goes here
  let res = [];
  for (var i = 0; i < obj.length; i++) {
    if (!contains(res, obj[i])) {
      res.push(obj[i]);
    }
  }

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
