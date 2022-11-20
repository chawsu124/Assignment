// convert js obj and js array to json //

//create js obj:
// const city = {
//     name: "Yangon",
//     pupulation: "6 millions",
//     region: "Asia",
//     isCapital: true
// };

// convert JS obj: to JSon string
// const convertedJSonString = JSON.stringify(city);
// set new localstorage
// localStorage.setItem("city", convertedJSonString);

// get from localstorage 
// const cityFromLoacalstorage = localStorage.getItem("city");
// console.log("city from localstorage: ", cityFromLoacalstorage); // city from localstorage:  {"name":"Yangon","pupulation":"6 millions","region":"Asia","isCapital":true}

// convert JSon sting to JS obj:
// const cityAsJSobject = JSON.parse(cityFromLoacalstorage);
// console.log("city as JS object: ", cityAsJSobject.region); //Asia
// console.log("city as JS object: ", cityAsJSobject.name); // Yangon

// ----------------------------------------

// create js array:
const cities = [
    {
        name: "Yangon",
        pupulation: "6 millions",
        region: "Asia",
        isCapital: true
    },
    {
        name: "MyitKyiNa",
        pupulation: "200 000",
        region: "Asia",
        isCapital: false
    }
]

// convert JS obj: => JSon string
const convertedJSonString = JSON.stringify(cities);
// set new localstorage
localStorage.setItem("cities", convertedJSonString);

// get from localstorage 
const citiesFromLoacalstorage = localStorage.getItem("cities");
console.log("cities from localstorage: ", citiesFromLoacalstorage); 
// output is --> In JSon string type " ": " "  --> so you can call in object form objName.objProperty
// cities from localstorage:  [{"name":"Yangon","pupulation":"6 millions","region":"Asia","isCapital":true},
 // {"name":"MyitKyiNa","pupulation":"200 000","region":"Asia","isCapital":false}]

// convert JSon sting => JS obj:
const citiesAsJSobject = JSON.parse(citiesFromLoacalstorage);
console.log("cities as JS object: ", citiesAsJSobject[0]);
// output is --> In JS type  : " " --> so you can call in array form arrayName[0]
 // cities as JS object:  {name: 'Yangon', pupulation: '6 millions', region: 'Asia', isCapital: true}
console.log("cities as JS object: ", citiesAsJSobject[1]);
// output is --> In JS type  : " " --> so you can call in array form arrayName[0]
 // cities as JS object:  {name: 'MyitKyiNa', pupulation: '200 000', region: 'Asia', isCapital: false}