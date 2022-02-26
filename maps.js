const fruits = new Map([
    ["apples", 500],  //entry 1
    [60000, 500], //entry 2
    ["bananas", 300],
    ["oranges", 200]
  ])

  console.log(fruits.get("apples"));
  console.log(fruits.has("apples"));
  console.log(fruits.set("apples", 200));
  console.log(fruits);
  console.log(fruits.size);


//   The entries() method returns an iterator object with the [key, values] in a Map:
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text);