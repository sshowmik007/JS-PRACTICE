// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x)


// Or create a function to sum all input values:

y = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(y)

// Objects are Passed by Reference
// In JavaScript, object references are values.

// Because of this, objects will behave like they are passed by reference:

// If a function changes an object property, it changes the original value.

// Changes to object properties are visible (reflected) outside the function.

function a(z){
    z.one=7;
    return z.one*z.two;
}

let m={
    one:5,
    two:6
};

console.log(a(m))