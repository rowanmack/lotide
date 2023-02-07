const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected + ".");
    return;
  }
  console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
};


/* test code:
assertEqual("Lighthouse Labs", "Lighthouse Libs");
assertEqual(1, 1); */