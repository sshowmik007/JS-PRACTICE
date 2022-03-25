// JavaScript functions are defined with the function keyword.

// You can use a function declaration or a function expression

// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

function myFunction(a, b) {
    return a * b;
  }

//   Function Expressions

//   A JavaScript function can also be defined using an expression.

// A function expression can be stored in a variable:

// After a function expression has been stored in a variable, the variable can be used as a function:

const x = function (a, b) {
    return a * b
}

let z = x(4, 3);
console.log(z)




// Self-Invoking Functions
// Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

// You cannot self-invoke a function declaration.

// You have to add parentheses around the function to indicate that it is a function expression:

// (function(){
//     console.log("hello");
// })();

// Functions Can Be Used as Values

function myFunction(a, b) {
    return a * b;
  }
  
  let y = myFunction(45, 3);

  console.log(y)

//   A function defined as the property of an object, is called a method to the object.

// A function designed to create new objects, is called an object constructor.

//OBJECT CONSTRUCTOR uses Capital word