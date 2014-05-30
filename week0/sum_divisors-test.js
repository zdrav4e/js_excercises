"use strict";

var sum_divisors = require("./sum_divisors").sum_divisors;

exports.testSumDiv = function(test) {
	test.equal(15, sum_divisors(8));
  test.equal(8, sum_divisors(7));
  test.equal(1, sum_divisors(1));
  test.equal(2340, sum_divisors(1000));
	test.done();
};
