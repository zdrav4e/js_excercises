"use strict";

var sum = require("./sum_min_max").sum;

exports.testSumMinMax = function (test) {
  test.equal(10, sum([1,2,3,4,5,6,8,9]));
  test.equal(90, sum([-10,5,10,100]));
  test.equal(2, sum([1]));
  test.done();
};
