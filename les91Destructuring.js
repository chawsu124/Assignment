// ES 6 //
// Destructuring //

let retirement = (year) => {
    const age = new Date().getFullYear() - year;
    return [age, 60 - age];
}

const [age, retirementAge] = retirement(1999);
console.log(age);
console.log(retirementAge);