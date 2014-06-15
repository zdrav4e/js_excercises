"use strict";

function Point (x, y) {

  if (!(this instanceof Point)) {
    return new Point(x, y);
  }

  this.getx = function () {
    return x;
  };
  this.gety = function () {
    return y;
  };

  this.xInc = function (amount) {
    if (typeof amount === "undefined") {
      amount = 1;
    }
    x += amount;
  };

  this.xDec = function (amount) {
    if (typeof amount === "undefined") {
      amount = 1;
    }
    x -= amount;
  };

  this.yInc = function (amount) {
    if (typeof amount === "undefined") {
      amount = 1;
    }
    y += amount;
  };

  this.yDec = function (amount) {
    if (typeof amount === "undefined") {
      amount = 1;
    }
    y -= amount;
  };
}

var p = new Point(1, 3);
p.xInc();
//console.log(p.getx());

p.yInc();
//console.log(p.gety());

//console.log(p.x);

Point.prototype.equals = function(point) {
  return (point.getx() === this.getx() && point.gety() == this.gety());
};

//console.log(p.equals(new Point(2, 4)));

Point.prototype.toString = function() {
  return ["Point @ " , this.getx(), ", ", this.gety()].join("");
};

//console.log(p.toString());
exports.Point = Point;
