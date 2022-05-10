# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sydannyopal/lotide`

**Require it:**

`const _ = require('@sydannyopal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEquals(...)`: This function helps us test our code.
* `head(...)`: This function returns the first item in the array.
* `tail(...)`: This function returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `eqArrays(...)`: This function can compare two arrays for a perfect match
* `assertArraysEqual(...)`: This function is for asserting that two arrays are equal.
* `without(...)`: This function returns a subset of a given array, removing unwanted elements.
* `middle(...)`: This function takes in an array and return the middle-most element(s) of the given array.
* `countOnly(...)`: This function should take in a collection of items and return counts for a specific subset of those items.
* `countLetters(...)`:  This function takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions(...)`: This function returns all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(...)`: This function searches for a key on an object where its value matches a given value.
* `eqObjects(...)`: This function takes in two objects and returns true or false, based on a perfect match.
* `assertObjectsEqual(...)`: This function will help us easily test functions that return objects.
* `Map(...)`: This function returns a new array based on the results of the callback function.
* `takeUntil(...)`: This function will keep collecting items from a provided array until the callback provided returns a truthy value.
* `findKey(...)`: This function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
