"use strict";

// we require the module name - without .js
// and after this - the function that we want to test
var fib = require("./fibonaci").fib;

exports.testFib = function(test) {
  test.equal(1, fib(1));
  test.equal(1, fib(2));
  test.equal(2, fib(3));
  test.equal(55, fib(10));
  test.done();
};
