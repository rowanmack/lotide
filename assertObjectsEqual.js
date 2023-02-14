const eqObjects = function(object1, object2) {
  const objArrOne = Object.keys(object1);
  const objArrTwo = Object.keys(object2);
  //console.log(objectKeysArr);
  if (objArrOne.length !== objArrTwo.length) {
    return false;
  }

  for (keys of objArrOne) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      eqArrays(object1[keys], object2[keys]);
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}.`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}.`);
};



// const objectOne = {
//   num : 1
// };

// const objectTwo = {
//   num : 1
// };

// assertObjectsEqual(objectOne, objectTwo)

module.exports = assertObjectsEqual

