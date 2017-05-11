const _ = require('./underbar');

const first = function (str, n) {
  // Your code goes here
  return n === undefined ? str[0] : str.slice(0, n);
};

const last = function (str, n) {
  // Your code goes here
  return n === undefined ? str[str.length - 1] : str.slice(-n);
};

const removeChar = function (str, target) {
  // hint: use _.reject
  // Your code goes here
  const arr = _.reject(str, (elem) => elem === target);
  let res = '';
  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return res;
};

const hasChar = function (str, target) {
  // hint: use _.some
  // Your code goes here
  return _.some(str, (elem) => elem === target);
};

const isOnlyDigits = function (str) {
  // Your code goes here
};

const filterToOnlyDigits = function (str) {
  // Your code goes here
};

const truncateString = function (val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function (obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function (str) {
  // Your code goes here
};

const dedup = function (str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString,
};
