// JSON is a format for storing and transporting data.

// JSON is often used when data is sent from a server to a web page.

// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand
// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. 
// Code for reading and generating JSON data can be written in any programming language.


const persons={
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}

// Converting a JSON Text to a JavaScript Object

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text); //converted to OBJECT
console.log(obj);
console.log(text);
console.log(obj.employees[0].firstName);



//converting to JSON
let id = {
    fN : "SHOWMIK",
    lN : "SADMAN",
}
JSON.stringify(id);
console.log(id);


