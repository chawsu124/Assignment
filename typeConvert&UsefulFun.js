// ------------------Type Convertion------------------//



// -----------------Change string to number
let str = "20.215635465843";// string type

let num = Number(str).toFixed(2);
console.log(num);// 20.21
//let num = Number(str).toFixed(3);// 20.215
let stnum = "20Hello";//string
let numstring = Number(stnum);
console.log(numstring);// NaN // Not a Number because 20Hello--> Hello can't change to number


// -----------------Change number to string
let num1 = 30;// number type

let str1 = String(num1);// the first way
// or
let str2 = num1.toString();// the second way
console.log(typeof str1);// string


// --------------------Change date to string 
let date1 = new Date();// date type

let toStringDate = String(date1);
console.log(toStringDate);// object


// ------------------Math obj------------------//
let mathPi = Math.PI; 
console.log(mathPi);// output is the value of PI

let mathE = Math.E;
console.log(mathE);// output is the value of E

let num2 = 22.32;
// Math.round() can output the nearest full value of you input
// eg: 6.521 --> 7   // eg: 8.21 --> 8
console.log(Math.round(num2));// 22 

// Math.ceil() can output the greater value of the input
// eg: 31.425 --> 32  // eg: 2.1 --> 3
console.log(Math.ceil(num2));// 23


// Math.floor() can output the Lower value of the input
// eg: 10.23 --> 10  // eg: 6.53 --> 6
console.log(Math.floor(num2));// 22


// Math.sqrt() can output the square value of the input
console.log(Math.sqrt(num2));// the square value of input


// Math.abs() can output the distance value of input from 0
// eg: 21.63 --> 21.63  // eg: -32.5 --> 32.5 
console.log(Math.abs(num2));// 22.32


// Math.pow() can output the power value of the input
//console.log(Math.pow(2,3)); // 8
console.log(Math.pow(3,3));// 27


// Math.random() can output the value in 0 to 1
console.log(Math.random()); // 0.5636214613 // 2.131444612 

let dice = Math.random() * 6; // can output the value in 0 to 6 // 0.5636214613 // 2.131444612 
let dice1 = (Math.random() * 6) + 1;// can output the value in 1 to 6 // 5.5636214613 // 2.131444612 
let dice2 = Math.ceil((Math.random() * 6) + 1);// can output the value in 1 to 6 // 5//3//1//6

