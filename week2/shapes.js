"use strict";

function Shapes(type) {
  this.getType = function(){
    return type;
  };
}

Shapes.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};

function Rectangle(height, width) {
  Shapes.call(this, "rectangle");
  this.getHeight = function() {
    return height;
  };
  this.getWidth = function() {
    return width;
  };
}

Rectangle.prototype = Object.create(Shapes.prototype);
Rectangle.prototype.constructor = Shapes;

Rectangle.prototype.area = function() {
  return this.getWidth() * this.getHeight();
};

var rect = new Rectangle(5, 4);
console.log(rect.area());
console.log(rect.getType());


/*
function Triangle() {

}

function Circle() {

}
*/
