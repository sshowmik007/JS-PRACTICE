// Class Inheritance
// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:

// Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {    //class
    constructor(brand) {   //constructor
      this.carname = brand;
    }
    present() {   //method
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {  //new class name MODEL which inherited from Car
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");

 console.log(myCar.show()) 

//  The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.


