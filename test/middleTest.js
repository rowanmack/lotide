const assert = require('chai').assert;
const middle = require('../middle');

// assertArraysEqual(middle([2, 3, 4]), [3]);


describe("#middle", () => {
  
  it("returns [3] for [2, 3, 4]", () => {
    assert.deepEqual(middle([2, 3, 4]), [3]);
  });

  it("returns [3, 4] for [2, 3, 4, 5]", () => {
    assert.deepEqual(middle([2, 3, 4, 5]), [3, 4]);
  });

  it("returns [] for [2, 3]", () => {
    assert.deepEqual(middle([2, 3]), []);
  });

});