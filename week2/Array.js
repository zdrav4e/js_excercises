"use strict";

//zad3
Array.prototype.first = function  () {
  if (this.length === 0) {
    throw "Empty string doesn't have first element";
  }
  return this[0];
};

console.log(["a", "b", 3].first());
//console.log([].first());

Array.prototype.range = function(from, to) {
	var i, result = [];
	for (i = from; i<= to; i++) {
		result.push(i);
	}
	return result;
};

console.log([].range(1, 10));

Array.prototype.sum = function () {
  return this.reduce(function(a, b) {
    return a + b;
  });
};

console.log([1, 2, 3].sum());

Array.prototype.average = function () {
  return this.sum() / this.length;
};

console.log([1, 2, 3, 4].average());
