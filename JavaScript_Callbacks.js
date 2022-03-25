// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// This example will end up displaying "Goodbye":



// Sequence Control
// Sometimes you would like to have better control over when to execute a function.

// Suppose you want to do a calculation, and then display the result.

// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:


function myDisplayer(some) {
   console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);


  console.log('L1');
  setTimeout(function(){
      console.log('L2');
  },2500);
  
  console.log('L5');
  console.log('L3');

  
  