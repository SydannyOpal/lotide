const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let obj = {};
  let lettersCount = countLetters("lighthouse in the house");

  for (let i of string) {
    if (obj[i] ? obj[i].count ++ : obj[i] = {count : 1});
  }
  return obj;
};
