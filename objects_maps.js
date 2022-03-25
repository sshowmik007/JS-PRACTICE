const fruits= new Map([
    ["a",600],
    [2,50],
    ["D",2500]
]);

console.log(fruits)

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits)

fruits.set("apples", 500);
console.log(fruits)
// The get() method gets the value of a key in a Map:

console.log(fruits.get("apples"))
// The size property returns the number of elements in a Map:
console.log(fruits.size);


// The forEach() method invokes a callback for each key/value pair in a Map:
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

console.log(text)

// The keys() method returns an iterator object with the keys in a Map:


let veggies = "";
for (const x of fruits.keys()) {
  veggies += x;
}

console.log(veggies)