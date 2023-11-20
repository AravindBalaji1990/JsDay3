
//Inheriting from Another Object:
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

// child object constructor
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Inherit from Animal prototype
//Link the Prototypes
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

const fluffy = new Dog("Fluffy", "Golden Retriever");
fluffy.speak(); // Output: Fluffy makes a sound.
fluffy.bark();  // Output: Fluffy barks.
