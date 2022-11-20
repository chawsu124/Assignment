// Class constructor //

// ES 5
// function Person(name,dob,job){ // create Person constructor 
//     // because the first word of Person (P) is capital letter , so this is constructor
//     this.name = name;
//     this.dob = dob;
//     this.job = job;
// }
// Person.prototype.calculateAge = function(){ // and create instant object
//     var age = new Date().getFullYear - this.dob;
//     console.log(age);
// }

// var person1 = new Person("Ma Ma",1990,"Developer");




// ES 6
class Person {
    constructor(name,dob,job){
        this.name = name;
        this.dob = dob;
        this.job = job;
    }

    calculateAge(){ // this method can be call from out of function
        var age = new Date().getFullYear - this.dob;
        console.log(age);
    }

    static greeting(){ // this static method can not be call from out of function // it is static
        console.log("Hello");
    }
}

var person1 = new Person("Ma Ma",1990,"Developer");

Person.greeting();// can be call in this way