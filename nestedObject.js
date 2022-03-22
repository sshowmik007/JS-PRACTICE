// Values in objects can be arrays, and values in arrays can be objects:


const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }


//   To access arrays inside arrays, use a for-in loop for each array:

// for (let i in myObj.cars) {
//     console.log(i); //returning idx
//   }


let x= "";
  for (let i in myObj.cars) {
    x += "  " + myObj.cars[i].name + "  ";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
    }
    console.log(x);
  }


  