//Decoupling- segregating dependency

class Engine {
    start() {
      console.log("Engine started.");
    }
  }
  
  class Car {
    constructor(engine) {
      this.engine = engine; // Decoupling: Engine is passed as a parameter during construction.
    }
  
    startCar() {
      this.engine.start();
      console.log("Car started.");
    }
  }
  
  // Create an instance of Engine separately.
  const myEngine = new Engine();
  
  // Pass the Engine instance to the Car constructor, achieving decoupling.
  const myCar = new Car(myEngine);
  myCar.startCar();  