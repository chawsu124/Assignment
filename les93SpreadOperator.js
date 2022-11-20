// spread operator //

// ES 5 
// function addFourAge5(a,b,c,d){
//     return a + b + c + d;
// }
// var sum1 = addFourAge5(2,4,3,5);
// console.log(sum1);

// var ages = [21,20,16,22];
// var sum2 = addFourAge5.apply(null, ages);// use .apply method
// console.log(sum2);




// ES 6
const addFourAge6 = (a,b,c,d) => {
    return a + b + c + d;
}

var ages = [21,20,16,22];
var sum3 = addFourAge6(...ages);// use spread operator
console.log(sum3);


let family1 = ["U Ba", "Mg Aye", "Su Su"];
let family2 = ["Daw Hla", "May Hnin", "Nu Nu"];

const bigFamily = [...family1,...family2];
console.log(bigFamily);

// const bigFamily = [...family1,"Soe Soe",...family2];
//const bigFamily = [...family1,"Soe Soe",...family2,"Aung Aye"];