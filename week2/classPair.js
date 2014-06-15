"use strict";

//zad1

function Pair(left, right) {
	if(!(this instanceof Pair)) {
		return new Pair(left, right);
	}
	this.left = left;
	this.right = right;
}

Pair.prototype.equals = function(Pair) {
  if (Pair.left === this.left && Pair.right === this.right) {
    return true;
  }
  return false;
};

var p = new Pair("test", 2);
console.log(p.equals(new Pair("test", "2")));
console.log(p.equals(new Pair("test", 2)));

Pair.prototype.toString = function() {
  return "(" + this.left.toString() + ", " + this.right.toString() + ")";
};

console.log(p.toString());

Pair.prototype.toList = function() {
  return [this.left, this.right];
};

console.log(p.toList());

Pair.prototype.combine = function(f) {
  return f(this.left, this.right);
};

console.log(p.combine(function(a, b) {
  return a + " combined " + b;
}));

//zad 2

String.prototype.capitalize = function() {
  //str.split("").map(function (element) {
  //  return element
  //})

};

String.prototype.map = function(action) {
  var chars = this.split("");
  return chars.map(action).join("");
};

String.prototype.forEach = function(action) {
  var char = this.split("");
  char.forEach(action);
};

String.prototype.dasharize = function () {
/*
  return this.split("").map(function (el) {
    if (el == "_") {
      return "-";
    }
    return el;
  }).join("");
*/

  return this.map(function (a) {
    if (a == "_") {
        return "-";
      }
      return a;
    }
  );
/*
  return this.forEach(function (a) {
    if (a == "_") {
      return "-";
    }
    return a;
  }).join("");
*/
};

console.log("border_bottom_width".dasharize());

String.prototype.times = function(amount) {
  var result = "";
  while (amount > 0) {
    result += this + " ";
    amount--;
  }
  return result;
};

console.log("bobi".times(5));

String.prototype.blank = function () {
  var reduced = this.split("").every(function(a) {
    return a === " ";
  });
  return reduced;
};

console.log("  ".blank());
console.log("".blank());
console.log(" a".blank());

