// var mgmg = {
//     firstname : 'Mg Mg',//firstname is object property
//     lastname : 'Gyi',// : mean insert into obj property
//     age : 25,//use coma(,) end of each property
//     family : ['U Ba','Daw Mya','Ko Ko','Su Su'],
//     isMarried : true
// } //don't use semicomma(;) in the end of object

// console.log(mgmg);//retrieve this object
// console.log(mgmg.age);//retrieve age property of mgmg object
// console.log(mgmg['isMarried']);//the other way to retrieve property of object
// console.log(mgmg.family);

// var koko = new Object();
// koko.firstname = 'Ko Ko';
// koko.lastname = 'Aung';
// console.log(koko);



//function create in object
var mama = {
    firstname : 'Ma Ma',
    lastname : 'Su',
    family : ['Mg Mg','Ko Ko','Nu Nu'],
    isMarried : 'false',
    calculateAge : function(yearOfBirth){
        this.age = 2022 - yearOfBirth;//calculate age and insert age property in this object
    }
}
mama.calculateAge(1999);//Must call calculateAge function in mama object
console.log(mama.age);
console.log(mama);//call all value in mama object