const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

//test cases:
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false



// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); 