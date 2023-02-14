const without = function(source, itemsToRemove) {
  let result = [];
    for (let element of source) {
      if (!itemsToRemove.includes(element)) {
          result.push(element);
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

module.exports = without