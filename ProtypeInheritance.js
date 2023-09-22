// Creating a constructor function for a simple object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype of the Person constructor
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
};

// Creating an instance of Person
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

// Calling the sayHello method, which is inherited from the prototype
person1.sayHello(); // Outputs: "Hello, my name is John. I am 30 years old."
person2.sayHello(); // Outputs: "Hello, my name is Alice. I am 25 years old."
