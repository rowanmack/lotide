const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}.`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(array) {
  return array[0];
};

//test cases:

console.log(head([6, 6, 6]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");