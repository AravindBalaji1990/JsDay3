//Example for Coupling
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    rent(customer) {
      // Rent the car to the customer.
      // Here, the Car class directly interacts with the Customer class, creating coupling.
      customer.addRentedCar(this);
    }
  }
  

  // another class
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentedCars = [];
    }
  
    addRentedCar(car) {
      // Add the rented car to the customer's list of rented cars.
      this.rentedCars.push(car);
    }
  }
  const data = new Car('hyundai','i10')
  console.log(data.rent('sample'))