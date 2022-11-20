//-----------string Property and methods---------



let str1 = "On December, I found you";
let str2 = "Hello";

let str3 = str1.concat("-", str2);
console.log(str3);// On December, I found you-Hello
// let str3 = str1.concat("&", str2);
// console.log(str3);// On December, I found you&Hello

console.log(str2.toUpperCase());// HELLO
console.log(str2.toLowerCase());// hello

let str4 = "hey now Brown Cow in down town";

console.log(str4.indexOf("n"));// 4 // the first saw n
console.log(str4.lastIndexOf("n"));// 29 // the last saw n

console.log(str4.charAt(5));// o // letter which have index number 5
console.log(str4.charAt(2));//y // letter which have index number 2

console.log(str4.length);// 30
console.log(str4[str4.length - 1]); // n

console.log(str4.substring(0,3));// hey
console.log(str4.substring(-4,4));// town // - start from last of string

console.log(str4.slice(0,3));// hey 
console.log(str4.slice(-4));// town // - start from last of string

let res = str4.split(" ");// each divided one in array from str4 from space
console.log(res);// ["hey"  "now" "Brown" "Cow" "in" "down" "town"]

let replaceStr4 = str4.replace("down","up");// replace "down" to "up"
console.log(replaceStr4);// hey now Brown Cow in up town

console.log(str4.includes("Brown"));// true