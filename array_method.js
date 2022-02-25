const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.toString();
fruits.join(" * ");
// document.getElementById("demo").innerHTML = fruits.join(" * ");
// fruits.shift() ;
fruits.sort();
fruits.reverse();
console.log(fruits)

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return a - b
});
points.sort(function(a, b){
    return b - a});
    console.log(points);