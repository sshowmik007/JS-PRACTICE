class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    //constructor method
    //we can sent parameter to method

    play(status,published){
        console.log(`${this.name} is running ${status}`);
        console.log(`${this.year} was created ${published}`);
    }
}

const car1= new Car("toyota" , );  //here this= car1, creatiing an actural object
const car2= new Car("BMW" , 2018);
const car3= new Car("Alien" , 2019);

car1.play("faster","Earlier");