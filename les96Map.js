// -----------Map()------------
 // Map() use in ES 6 // create and then use it .set and .get method

// ES 6
const question = new Map();

question.set('question','What is the official name of javascript ES6 ?');
question.set(1,'ES 5');
question.set(2,'ES 6');
question.set(3,'ES 2015');
question.set(4,'ES 7');
question.set('correct',3);
question.set(true,'Correct answer : D');
question.set(false,'Wrong, Please try again');

console.log(question.get('question'));

// console.log(question.get(1));
// console.log(question.get(2));
// console.log(question.get(3));
// console.log(question.get(4));

//console.log(question.size);
//console.log(question.has('correct'));

// for(let v of question.keys()){
//     console.log(v);
// } //1,2,3,4

// for(let v of question.values()){
//     console.log(v);
// } //ES 5,ES 6,ES 2015,ES 7

for(let [key,value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`This is ${key} : ${value}`)
    }
}
// or
question.forEach((v, k) => {
    console.log(`key is ${k} and value is ${v}`);
})
// or
let arr = Array.from(question); 
// if you want only keys--> let arr = Array.from(question.keys()); 
// if you want only values --> let arr = Array.from(question.values());
console.log(arr);

const ans = parseInt(prompt("Please enter your answer?"));

console.log(question.get(ans === question.get('correct')));