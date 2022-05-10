const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  if (array.length === 1 || array.length === 2) return [];
  if (array.length % 2 !== 0) return [array[Math.ceil(array.length / 2 - 1)]];
  return [array[array.length / 2 - 1], array[array.length / 2]];
};

module.exports = middle;
// Tests
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
