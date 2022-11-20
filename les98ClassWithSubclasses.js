// Class with Subclasses //

// ES 5
// function Person(name, dob, job) { // create Person constructor 
//     //because the first word of Person (P) is capital letter , so this is constructor
//     this.name = name;
//     this.dob = dob;
//     this.job = job;
// }
// Person.prototype.calculateAge = function () {  //and create instant object
//     var age = new Date().getFullYear - this.dob;
//     console.log(age);
// }

// var Athele = function(name,dob,job,olympicGame,medals){
//     Person.call(this,name,dob,job);
//     this.olympicGame = olympicGame;
//     this.medals = medals;
// }

// Athele.prototype = Object.create(Person.prototype);

// var personAthele1 = new Athele("ThuYein",1990,"Developer",3,10);
// personAthele1.calculateAge();




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
}

class Athele extends Person{
    constructor(name,dob,job,olympicGame,medals){
        super(name,dob,job);
        this.olympicGame = olympicGame;
        this.medals = medals;
    }
}

var personAthele1 = new Athele("ThuYein",1990,"Developer",3,10);

personAthele1.calculateAge();