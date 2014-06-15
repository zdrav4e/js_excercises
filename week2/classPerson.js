class Person {
	private String name;
	private int age;

	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}
	public String sayHello() {
		return "I am" + this.name;
	}
}

Person person = new Person("Ivan", 12);

"use strict";


function Person(name, age) {
  //Taka ne zamyrsqvame globalniq obekt window
  if (!(this instanceof Person)) {
    return new Person(name, age);
  }
  this.name = name;
  this.age = age;

  /* Metod - definira se pri vsqko vikane na new Person() - losho
    this.sayHello = function() {
    return "My name is " + this.name;
  }*/

}

Person.prototype.sayHello = function() {
  return "MY NAME IS " + this.name;
}


var p = Person("Bobi", 30);
var p = new Person("Bobi", 20);

A.__proto__ === B.__proto__ === C.__proto__ = Object

