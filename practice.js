const car={
    name : "fiat",
    model: 500,
    weight : "750kg",
    color : "white" ,
    start :function(){
        console.log("car has starrted");
        this.drive();
    },
    drive : function(){
        console.log ("car is driving");
    },
};

console.log(car.weight);
car.start();


