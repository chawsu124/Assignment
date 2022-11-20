// Rest parameter //

// ES 5
function isFullAge5(){
    var agesArray = Array.prototype.slice.call(arguments); // use rest parameter and to be form in array
    agesArray.forEach(function(current){
        console.log((2020 - current) > 18);
    })
}
isFullAge5(1990,1960,1999);

// ES 6
const isFullAge6 = (...years) => {
    // console.log(years); // use rest parameter
    years.forEach((current) => {
        console.log((2020 - current) > 18);
    })
}
isFullAge6(1990,1960,1999);