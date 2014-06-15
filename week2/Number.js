"use strict";

Number.prototype.times = function(action) {
  var i;
  for (i = 1; i <= this; i++) {
    action();
  }
};

(5).times(function () { console.log("OMG!"); });
