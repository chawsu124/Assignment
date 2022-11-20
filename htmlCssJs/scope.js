//1.under Window
var city = "Yangon";//we use var type so our variable name is in window object
//so var is Global scope
window.city //Yangon //so our variable name is in window object
var city = "Rakhine";
console.log(city); // Rakhine

let country = "Myanmar";//we use let type so our variable name is not in window object
window.city //underfined //so our variable name is not in window object

const welive = "Norway";//we use const type so our variable name is not in window object
window.city //underfined //so our variable name is not in window object

cityWelive = "Pyu";//we can't use any type (var/const/let) so our variable name is in window object
window.cityWelive //Pyu //so our variable name is in window object


// var // Global , Redeclarable 
// let // local , reassign the next one
// const // local , Not reassign the next one



//2.in our function
function myFun(){
    var name = "mgmg";//local scope variable

    age = "12";// without Initialize type of (var/const/let) 
}

console.log(name);//cause error why name is in function , so name is local scope variable 
console.log(age);//cause error why you don't call function firstly

myFun();//call function
console.log(age);//so output --> 12 



//3. Block Scope
//{ } //if{ } else{ }//while{ }//switch( ) case{ }
{
    let num = 1;
    const name = "mgmg";
    var city = "Taungoo";//var is Global scope type
}
console.log(num);//cause error why we use type of let initializing
console.log(name);//cause error why we use type of const initializing
console.log(city);// output --> Taungoo // why we use var type


//4. inner function or outer function
let city = "Yangon";
const outerFunction = () => {
    var num1 = 10;
    num2 = 100;
    
    if(num1 === 10){
        var numVar = 1;
        let numLet = 2;
        const numConst = 3;
    }

    console.log(numVar);//1
    console.log(numLet);//error
    console.log(numConst);//error

    const innerFunction = () => {
        //have result because inner fun: call value from outer fun: 
        console.log(numVar);//1
        console.log(city);//Yangon
    }
    innerFunction();
}

innerFunction();//error why inner function can not call inner function
outerFunction();//have result because inner fun: call value from outer fun: 1