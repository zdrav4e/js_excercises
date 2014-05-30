"use strict";

var map = require("./forEach").map;

exports.testmap = function(test) {
  var arr = [1, 2, 3];
  var obj = {"1":1,"2":2,"3":3};
  var f = function(a) {
    return a*a;
  };
  //There is something wrong here
  test.equal([1,4,9], map(f, arr));
  test.equal({"1":1,"2":4,"3":9}, map(f, obj));
  test.done();
};
