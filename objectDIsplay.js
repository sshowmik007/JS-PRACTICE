const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

//   console.log(person);

//   document.getElementById("demo").innerHTML = person.name + ' is ' + person.age;

//using for in loop

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
};

// document.getElementById("demo").innerHTML = txt;


// Using Object.values()
// console.log(Object.values(person));

// const myArray = Object.values(person);
// document.getElementById("demo").innerHTML = myArray;

const person1 = {
    name: "John",
    age: function () {return 30;}
  };
  person1.age = person1.age.toString();
  
  let myString = JSON.stringify(person1);
  document.getElementById("demo").innerHTML = myString;
  