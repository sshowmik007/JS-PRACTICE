// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50, eyeColor:"blue"
//   }
  
//   const x = person;
//   x.age = 10;     

//   console.log(x)



// PROPERTIES
// The JavaScript for...in statement loops through the properties of an object.
 
const person= {
    name : 'x',
    lname: 'y',
    age: 25 ,
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
      } //nested object
 };

 console.log(person);
 console.log(person.cars.car3); //accessing the nested object property

 let txt = '';

 for(let x in person){
     txt+=person[x];
 }
 console.log(txt);


