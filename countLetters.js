const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}.`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(exString) {
  const results = {};
  for (const letters of exString) {
    if (letters !== ' ') {
      if (results[letters]) {
        results[letters] += 1;
      } else {
        results[letters] = 1;
      }

    }
  }
  return results;
};

exString = "lighthouse in the house";
console.log(countLetters(exString));
