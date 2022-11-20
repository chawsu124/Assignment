// Default Parameter //

// ES 5
// function SmithFamily(firstName,lastName,yearofBirth,nationality){
//     lastName === undefined ? lastName = "Smith" : lastName = lastName;// if lastName is underfined, put value "Smith" to lastName
//     nationality === undefined ? nationality = "America" : nationality = nationality;// if nationality is underfined, put value "America" to nationality

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearofBirth = yearofBirth;
//     this.nationality = nationality;
// }




// ES 6
// if lastName is underfined, put value "Smith" to lastName
// if nationality is underfined, put value "America" to nationality
function SmithFamily(firstName,lastName="Smith",yearofBirth=1999,nationality="America"){

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearofBirth = yearofBirth;
        this.nationality = nationality;
}

var john = new SmithFamily("John");
var emily = new SmithFamily("Emily","Helo",1990,"Myanmar");