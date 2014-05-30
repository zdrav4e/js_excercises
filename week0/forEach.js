"use strict";

var forEach = function(f, arr) {
  var result = [];
  if (Array.isArray(arr)) {
  var
    i = 0,
    n = arr.length;

    for(i; i < n; i++) {
      result[i] = f(arr[i], i, arr);
    }
  }
  else if (typeof arr === "object") {
    result = {};
    for(var key in arr) {
      result[key] = f(arr[key], key, arr);
    }
  }
  return result;
};

//console.log(forEach(function(x){return 2*x;}, {"1":1, "2":2, "3":3}));
//console.log(forEach(function(x){return 2*x;}, [1, 2, 3]));
exports.forEach = forEach;

var format = function(str, dict) {
  var placeholder;
  for (placeholder in dict) {
    var plstr = "{" + placeholder + "}";

    while (str.indexOf(plstr) !== -1) {
      str = str.replace(plstr, dict[placeholder]);
    }
  }
  return str;
};

var formatted = format("{lang} is a very weird {thing}! {lang}!", {
  "lang" : "JavaScript",
  "thing" : "language"
});

console.log(formatted);

