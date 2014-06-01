"use strict";

var forEach = function(f, arr) {
  var
    i = 0;
  if (Array.isArray(arr)) {
    var n = arr.length;

    for(i; i < n; i++) {
      f(arr[i], i, arr);
    }
  }
  else if (typeof arr === "object") {
    for(i in arr) {
      f(arr[i], i, arr);
    }
  }
};

exports.forEach = forEach;

var infoObj = {
    "name" : "Zdrav4e",
    "age" : 25,
};

var infoArr = [25, "Zdrav4e"];

forEach(function(value, key) {
   console.log(key, "-", value);
}, infoObj);

forEach(function(value) {
   console.log(value);
}, infoArr);


var map = function(f, arr) {
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

console.log(map(function(x){return x*x;}, {"1":1, "2":2, "3":3}));
console.log(map(function(x){return x*x;}, [1, 2, 3]));
exports.map = map;

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

var users = [{
    "name" : "Rado",
    "score" : 50
}, {
    "name" : "Ivan",
    "score" : 67
}, {
    "name" : "Vlado",
    "score" : 30
}];

// filter all users with score bigger than 40

var filter = function(pred, arr) {
  var result = [];
  forEach(function(value, index, arr){
    if (pred(value)) {
      result[index] = arr[index];
    }
  }, arr);
  return result;
};

var result = filter(function(user) {
    return user.score > 40;
}, users);

console.log(result);

var reduce = function(f, arr, start){
  var result = start, i, length = arr.length;
  for (i = 0; i < length; i++) {
    result = f(result, arr[i]);
  }
  return result;
};

console.log(reduce(function(a, b){ return a + b; }, [1, 2, 3], 0));

var any = function(pred, arr) {
  var res = arr.filter( function (x) { return pred(x); }).length;
  //At least one element fullfils the predicate
  return res > 0;
};


var anyv2 = function(pred, arr) {
  var i;
    for (i = arr.length - 1; i >= 0; i--) {
      if (pred(arr[i])) {
      return true;
      }
    }
    return false;
};

var anyv3 = function(pred, arr) {
  return arr.map( function (x) { return pred(x); })
               .reduce( function(a, b) { return a || b; });
};


var all = function(pred, arr) {
  var res = arr.filter( function (x) { return !pred(x); }).length;
  //All of the elements fullfil the predicate
  return res === 0;
};


var allv2 = function(pred, arr) {
  var i;
    for (i = arr.length - 1; i >= 0; i--) {
      if (!pred(arr[i])) {
        return false;
      }
    }
  return true;
};

var allv3 = function(pred, arr) {
  return arr.map( function (x) { return pred(x); })
               .reduce( function(a, b) { return a && b; });
};

console.log("Any negative? " + any(function(element){ return element < 0;}, [-1, 0, 1]));
console.log("All positive? " + all(function(element){ return element > 0;}, [3, 2, 1]));
