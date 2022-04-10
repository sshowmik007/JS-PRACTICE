// this keyword forr arrow function

var javascript = {
    name : 'JavaScript',
    libraries : ['react','vue','angular'],
    printLibraries: function(){
        // console.log(this)
        
        // var self=this;
        // this.libraries.forEach(function(a){
        //     console.log(`${self.name} loves ${a}`);
        // });

        this.libraries.forEach((a)=> console.log(`${this.name} loves ${a}`))
    }
};

javascript.printLibraries()