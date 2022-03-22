const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    set lang1(lang1){
        this.language=lang1
    }
  };
    // get lang() {   //get is accessor
    //   return this.language;
      
    // }
    
  person.lang1= "bang";

  console.log(person.lang1);