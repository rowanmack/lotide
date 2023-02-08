const without = function(source, itemsToRemove) {
  result = [];
  for (i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[i]) {
        if (result.includes(source[i])) {
          result;
        } else {
          result.push(source[i]);
        }
      }
    }
  }
    return console.log(result);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}.`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    let result = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

//without(["1", "2", "3"], [1, 2, "3"])
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]);
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);