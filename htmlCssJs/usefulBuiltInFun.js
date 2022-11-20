//Most useful built-in functions and methods//

// String
let textString = "Welcome To Myanmar";
textString.toUpperCase();
textString.toLowerCase();
textString.length;
textString.indexOf("n");

// Number
let num = "23";
let result = parseInt(num,10);//23

let num2 = 23;
num2.toString();//"23"

// Object
const customer = {name: "customer1",email: "cus1@gmail.com",gender: "male"};
Object.keys(customer);//Find property in object
Object.values(customer);//Find value in object

customer.hasOwnProperty("age");//false
customer.hasOwnProperty("name");//true

// Array
const cities = ["Yangon","Mandalay","Bago"];

cities.length; //3
cities[cities.length - 1]; //Bago
cities.push("Sittway")//insert last index to array//"Yangon","Mandalay","Bago","Sittway"
cities.shift("NayPyiTaw")//insert first index to array//"NayPyiTaw","NayPyiTaw"

cities.pop()//delete last index to array
cities.unshift()//delete first index to array

cities.indexOf("Yangon");//0
cities.indexOf("Taungoo");// -1 //because this city is not find in array

cities.slice(0,2);// retrieve array elements that you want//"Yangon","Mandalay"
cities.splice(0,2);// return the removed elements in new array ["Yangon","Mandalay"]
cities.join(",");//"Yangon,Mandalay,Bago"
cities.join("-");//"Yangon-Mandalay-Bago"