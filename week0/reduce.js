"use strict";
var reduce = function (oper, arr, start) {
var acc = (typeof start === "undefined") ? 0 : start;
	arr.forEach(function(value) {
		acc = oper(acc, value);
	});
	return acc;
};

exports.


