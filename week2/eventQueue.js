"use strict";

var EventQueue = (function() {
  var callbacks = {
  };

  var _public = {

    on : function(eventName, callback) {
      if (typeof callbacks.eventName === "undefined") {
        callbacks.eventName = [];
      }
      callbacks.eventName.push(callback);
    },
    trigger : function(eventName, args) {

      var _callbacks = callbacks.eventName || [],
          args = args || {};

        _callbacks.forEach(function(f) {
          f.call(null, args);
        });

    },
    remove : function(eventName) {
      delete callbacks.eventName;
    }
  };

  return _public;

} () );

EventQueue.on("PANIC_EVENT", function(args) {
    console.log("PANIC_EVENT HAPPENED!" + args.toString());
});

EventQueue.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});

EventQueue.trigger("PANIC_EVENT");
EventQueue.trigger("PANIC_EVENT", 5);

EventQueue.remove("PANIC_EVENT");

EventQueue.trigger("PANIC_EVENT");
