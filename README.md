# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rowanmack/lotide`

**Require it:**

`const _ = require('@rowanmack/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Returns the results of eqArrays
* `assertEqual`: Returns whether two primitive values are the same or not
* `assertObjectsEqual`: Returns the results of eqObjects
* `countLetters`: Returns an object containing the frequency of letters in a given string
* `countOnly`: Returns the number of frequencies of a given property in an array
* `eqArrays`: Returns whether two Arrays have the same elements
* `eqObjects`: Returns whether two objects have the same properties
* `findKey`: Returns the key of a given value in an object
* `findKeyByValue`: Returns a key of a given value within a given object
* `head`: returns the first element of an array
* `letterPositions`: Returns an object the indexs of each letter in a given string
* `map`: Recreation of .map - returns a new array populated with the results of calling a provided function.
* `middle,`: returns the middle one or two elements of an array depending where array length is even or odd.
* ` tail`: returns the 'tail' of an array - return all elements minus the first (arr[0])
* `takeUntil`: Returns the list of elements of a given array until the element specified
* `without`: Creates an array excluding all given values











  
