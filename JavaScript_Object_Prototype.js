//special constructor function
//easy to make multiple object
//it is a bluePrint, template
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName= function(){
        return this.firstName + ' ' + this.lastName
    }
  }
//object type
  const showmik = new Person ('showmik' , 'sadman' , 25 , 'blue');
  const mardia = new Person ('mardia' , 'mehezabin' , 25 , 'blue');
  
  Person.prototype.country='Bangladesh' ; //prototype is iportant
  console.dir(Person);

  console.log(showmik.country);