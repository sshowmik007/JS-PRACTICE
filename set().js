// const mySet=new Set();

// mySet.add("a");
// mySet.add("b");
// mySet.add("a");
// mySet.add("c");//it wont ADD

// console.log(mySet);


// Create a Set

const letter = new Set(["a","b","c"]);
// The forEach() method invokes (calls) a function for each Set element:
// List all Elements
let texts = "";
letter.forEach (function(value) {
  texts += value;
})

console.log(texts);
// letters.values()   // Returns [object Set Iterator]
// The values() method returns a new iterator object containing all the values in a Set:
const letters = new Set(["a","b","c"]);
let text = "";
for (const x of letters.values()) {
  text += x;
}
console.log(text);