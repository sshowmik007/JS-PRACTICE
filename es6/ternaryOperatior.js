var age = 10;

// var type;
// if(age>=18){
//     type="adult";
// }else{
//     type="child";
// }

// var type=(age>=18) ? "adult" : "child";

var type=(age>=18) ? "adult" 
                            : (age<10)
                                ? "child"
                                : "young"

console.log(type)