//---------------- Desturcturing {}/[]------------//

//-----------object Desturcturing// To retrieve and set each value from object or array
const cust = {name: "customer1",email: "customer1@gmail.com",gender: "male"};

//ES5
// const name = cust.name;
// const email = cust.email;
// const gender = cust.gender;
//console.log(name, email, gender);//customer1    customer1@gmail.com    male

//ES6
 const {name, email, gender} = cust;// when const declare , must write object name correctly
 console.log(name, email, gender);//customer1    customer1@gmail.com    male



//-----------Array Desturcturing
const cities = ["Yangon","Mandalay","Myitkyina"];
//ES5
// const cityOne = cities[0];
// const cityTwo = cities[1];
// const cityThree = cities[2];

//ES6
const [cityOne, cityTwo, cityThree] = cities;
//const [cityOne, , cityThree] = cities;//put blank instead of name you don't need
console.log(cityOne, cityTwo, cityThree); //"Yangon"    "Mandalay"    "Myitkyina" 


//---------- Spread operator(...),------------//
// To Copy the whole object or Array
//--------In object
const customer = {name: "customer1",email: "customer1@gmail.com",gender: "male"};
//ES5 copy object 
//const copyCust = Object.assign({},cust); //Copy object to copyCust from cust

//ES6 
//{...objName}
const copyCust = {...customer};//Copy the whole object to copyCust from cust
console.log(copyCust);//name: "customer1",email: "customer1@gmail.com",gender: "male"


//----------In Array
const cities1 = ["Yangon","Mandalay","Myitkyina"];
//ES5
// const copyCities1 = [].concat(cities1);
// console.log(copyCities1);//"Yangon","Mandalay","Myitkyina"

//ES6
//[...arrayName]
const copyCities = [...cities];
console.log(copyCities);//"Yangon","Mandalay","Myitkyina"

const copyCities2 = ["Bago", ...cities];
console.log(copyCities2);//"Bago","Yangon","Mandalay","Myitkyina"

const copyCities3 = [...cities, "Ngapli"];
console.log(copyCities2);//"Yangon","Mandalay","Myitkyina","Ngapli"


//---------------Rest Parameter(...)------------//
//To insert many arguments 
// ES6
const calculate = (...params) => {
    console.log(params);//1,2,3,4,5
}
calculate(1,2,3,4,5);

const calculate2 = (...params) => {
    let total = 0;
    for(let i = 0;i < params.length;i++){
        total += params[i];
    }
    return total;
}
let result = calculate2(1,2,3,4,5);
console.log(result);//15