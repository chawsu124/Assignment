//Most used built-in functions and methods//

// ES6 Array Filter

const customers = [
    {name: "customer1",email: "cus1@gmail.com",gender: "male",age: 21},
    {name: "customer2",email: "cus2@gmail.com",gender: "female",age: 22},
    {name: "customer3",email: "cus3@gmail.com",gender: "male",age: 23},
    {name: "customer4",email: "cus4@gmail.com",gender: "female",age: 24}
]

// array name .filter built-in function (use callback Function)
//callback function don't have () 
customers.filter(isMale);// {name: "customer1",email: "cus1@gmail.com",gender: "male",age: 21},
                        //{name: "customer3",email: "cus3@gmail.com",gender: "male",age: 23}


customers.filter(isMale2);//{name: "customer3",email: "cus3@gmail.com",gender: "male",age: 23}


//function
// const isMale = (arrayElement) => {
//     return arrayElement.gender === "male";//true / false
// }

// If the return statement is one line,
// we may not need { } in function and not need () in arrayArgument

// So we can write here
const isMale = arrayElement => arrayElement.gender === "male";
// Or we can write here too
customers.filter(arrayElement => arrayElement.gender === "male");


//   How do built-in filter function  // 
// 1.Call callback function with each element from the array as a parameter to the callback function
// 2.callback function must return Boolean(true/false) value based on the condition it wants to SpeechRecognitionResult
// 3.If the callback function return true, add the element to the final array
// 4.Repeat the above steps for every element in the array

const isMale2 = (arrayElement) => {
    return arrayElement.gender === "male" && arrayElement.age > 21;//true / false
}