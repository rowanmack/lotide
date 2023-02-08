const eqArrays = function(a, b) {
  console.log("this is a:", a)
  console.log("this is b:", b)
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}.`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const middle = function(array) {
  let result = [];
  let middleElms = 0;
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleElms = array.length / 2;
      result = [middleElms, middleElms + 1];
      return result;
    }
    if (array.length % 2 > 0) {
      middleElms = Math.floor(array.length / 2);
      result = [middleElms + 1];
      return result;
    }
  }
  else {
    return result;
  }
};

// test run:
// assertArraysEqual(middle([1, 2]), [2, 3]);

// alternative solution: 

// const middleTwo = function (arr) {
//   const index = Math.round((arr.length - 1)/2);
//   const output = [];
//   if (arr.length % 2 !== 0) {
//     output.push(arr[index]);
//     return output;
//   } else {
//     output.push(arr[index-1], arr[index]);
//     return output;
//   }
// }