"use strict";

var Point = require("./classPoint").Point;

function Robot(point) {

  this.moveLeft = function(amount) {
    this.getPosition().xDec(amount);
  };

  this.moveRight = function(amount) {
    this.getPosition().xInc(amount);
  };
  this.moveUp = function(amount) {
    this.getPosition().yDec(amount);
  };
  this.moveDown = function(amount) {
    this.getPosition().yInc(amount);
  };
  this.getPosition = function () {
    return point;
  };

}

var robot = new Robot(new Point(0, 0));

robot.moveLeft(10);
robot.moveDown(5);

console.log(robot.getPosition().toString());
