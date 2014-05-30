"use strict";

var is_prime = require("./is_prime").is_prime;

exports.testPrime = function (test) {
  test.equal(false, is_prime(1));
  test.equal(true, is_prime(2));
  test.equal(false, is_prime(8));
  test.equal(true, is_prime(11));
  test.equal(false, is_prime(-10));
  test.done();
};
