"use strict";

var queue = (function() {

  var _queue = [];

  var _public = {
    push : function (item) {
      _queue.push(item);
    },
    pop : function () {
      _queue.shift();
    },
    isEmpty : function () {
      return (_queue.length === 0);
    },
    print : function() {
      _queue.forEach(function(item){
        console.log(item);
      });
    }
  };

  return _public;

} () );

console.log(queue.isEmpty());
queue.push(5);
queue.push(10);
queue.push("qwq");
queue.pop();
console.log(queue.isEmpty());
queue.print();
