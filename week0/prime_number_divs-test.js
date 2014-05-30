"use strict";

var pnd = require("./prime_number_divs").pnd;

exports.testPND = function(test) {
  test.equal(true, pnd(7));
  test.equal(false, pnd(8));
  test.equal(true, pnd(9));
  test.done();
};
