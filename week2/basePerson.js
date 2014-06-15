"use strict";

var basePerson = {
	"firstName" : "",
};

var p1  = Object.create(basePerson);
p1.firstName = "Gosho";

var p2  = Object.create(new Person("Zdravka", 25));

var p3 = {
	"firstName" : "aaa",
};

Student.prototype = Object.create(Person.prototype);
