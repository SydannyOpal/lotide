const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key1 in obj1) {
      if (obj1[key1] !== obj2[key2]) {
        return false;
      }
      return true;
    }
  }
  return false;
};
const assertObjectsEqual = function(obj1, obj2, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj1)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};
