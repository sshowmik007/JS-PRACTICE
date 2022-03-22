const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName()); //This example accesses the fullName() method of a person object:
  console.log(person.fullName().toUpperCase()); // USING BUIT IN FUNCTION
  console.log(person.fullName); //If you access the fullName property, without (), it will return the function definition:

  //IT IS A FUNCTION
//   console.dir(person.fullName);