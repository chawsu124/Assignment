//creating new prototype object
var personProto = { 
    calculateAge : function(){
        console.log(2022 - this.yearOfBirth);
    }
}

//There is two way to insert property in propotype object 

//the first one is below:
var mgmg = Object.create(personProto);//call this prototype object
mgmg.name = 'Mg Mg';
mgmg.yearOfBirth = 1995;
mgmg.job = 'Developer';
//and  1. you can test browser inspect console 
  //   2.in console, write instance obj: name (eg: mgmg)
  //   3.output the result and prototype


  //the second way is below:
var koko = Object.create(personProto,{
    name : {value : 'Ko Ko'},//must have value word
    yearOfBirth : {value : 1995},
    job : {value : 'Teacher'}
})