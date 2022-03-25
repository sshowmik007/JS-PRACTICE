// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.

// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():



class Car{
    constructor(name, year){
        this.name= name;
        this.year=year;
    }

    run(){
        console.log(this.name + ' is running ' );
    }
    run2(speed){
        console.log(this.name + ' is running ' + speed );
    }
}

// he example above creates a class named "Car".

// The class has two initial properties: "name" and "year".

// A JavaScript class is not an object.

// It is a template for JavaScript objects.

const bmw = new Car('BMW' , 2000);
bmw.run()
bmw.run2('running with 120km/H speed')

// Class Methods
// Class methods are created with the same syntax as object methods.

// Use the keyword class to create a class.

// Always add a constructor() method.

// Then add any number of methods.


