// Arrow Function //

const years = [1990,1992,1995,1998];

// ES 5 //
var age5 = years.map(function(current){
    return 2022 - current;
});
console.log(age5);

// ES 6 //
let age6 = years.map((current,index) => {
    const now = new Date().getFullYear();
    const age = now - current;
    return `Age element ${index + 1} is ${age}`;
});
console.log(age6);