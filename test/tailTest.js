const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns '3' for []", () => {
    assert.strictEqual(tail(['3']), '3');
  });
});

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);