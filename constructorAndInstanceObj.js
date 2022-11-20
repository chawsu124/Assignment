//---------Constructor and Instance Object--------

//create Person Constructor 
var Person = function(name,dateofbirth,isMarried){//Constructor name must start Uppercase letter
    this.name = name;
    this.dateofbirth = dateofbirth;
    this.isMarried = isMarried;

    //if calculateAge fun: is created in this Person obj:
    // , the following instance obj: are don't call this fun:
        
    // this.calculateAge = function(){
    //     console.log(2022 - this.dateofbirth);
    // }
}

//so, you can create calculateAge fun: as prototype in out of Constructor
//therefore, instance objects can call this calculateAge fun:
Person.prototype.calculateAge = function(){
    console.log(2022 - this.dateofbirth);
}

Person.prototype.lastName = 'Soe';//you can insert new prototype property in Person Constructor

//create instance object inheritance from Person Object
var mgmg = new Person('Mg Mg',1999,false);
mgmg.calculateAge();
console.log(mgmg.name + mgmg.lastName);

var aungaung = new Person('Aung Aung',1985,true);
aungaung.calculateAge();
console.log(aungaung.name + aungaung.lastName);

var susu = new Person('Su Su',1999,false);
susu.calculateAge();
console.log(susu.name + susu.lastName);
