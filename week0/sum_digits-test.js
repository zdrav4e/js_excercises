"use strict";

var sum_digits = require("./sum_digits").sum_digits;

exports.testSumDigits = function (test) {
 // sum_of_digits(1325132435356) === 43

  test.equal(1, sum_digits(-10));
  test.equal(6, sum_digits(6));
  test.equal(6, sum_digits(123));
  test.equal(43, sum_digits(1325132435356));
  test.done();
};
