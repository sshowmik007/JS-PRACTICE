// The forEach() Method
// The forEach() method invokes a function for each Set element:


// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})

console.log(text + '  ')