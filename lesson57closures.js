//closures 
function retirement(retirementAge){//create retirement function 
    return function(yearofBirth){//create next function into first function
        var outputString = ' Years left until retirement .';
        var age = 2022 - yearofBirth;
        console.log((retirementAge - age) + outputString);

    }
}

var retirementMyanmar = retirement(60);//call retirement function and then return functin is put in retirementMyanmar variable
retirementMyanmar(1990);//call next function and put value
