// using prototype in Object Literals
const animal = {
    speak() {
      console.log(`${this.name} makes a sound.`);
    },
  };
  
  //creating a prototype of object 
  const dog = Object.create(animal);
  dog.name = "Buddy";
  dog.breed = "Labrador";
  
  dog.speak(); // Output: Buddy makes a sound.
  