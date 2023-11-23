// Creating a parent object
const parent = {
  greet: function() {
    console.log("Hello from the parent!");
  }
};

// Creating a child object that inherits from the parent
const child = Object.create(parent);

// Adding a new method to the child
child.sayHello = function() {
  console.log("Hi from the child!");
};

// Accessing methods through inheritance
// parent.child.greet()
child.greet();    // Output: Hello from the parent!
child.sayHello(); // Output: Hi from the child!