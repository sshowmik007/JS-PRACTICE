// How can you order names of students in your class sequentially?
const roll = [3,10,5,6,50,1,2,0,68,54];

console.log(roll.sort(function(a,b){
    return a-b;
}));

console.log(roll.sort(function(a,b){
    return b-a;
}));