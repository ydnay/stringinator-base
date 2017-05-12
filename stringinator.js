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
  return _.every(str, (elem) => !isNaN(parseInt(elem)));
};

const filterToOnlyDigits = function (str) {
  // Your code goes here
  let digits = _.filter(str, (elem) => !isNaN(parseInt(elem)));
  return digits.join('');
};

const truncateString = function (val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function (obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, (str) => truncateString(str, maxLength));
};

const countChars = function (str) {
  // Your code goes here
  let obj = {};
  _.each(str, (char) => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  });

  return obj;
};

const dedup = function (str) {
  // Your code goes here
  return _.uniq(str).join('');
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
