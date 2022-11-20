//-------Iterator------

function personIterator(personArr){
    let index = 0;

    return {
        next: () => {
            return index < personArr.length ? {value: personArr[index++], done: false} : {done: true};
        }
    }
}

let persons = ["mg mg","Tun Tun","Nu Nu"];

let personResult = personIterator(persons);
// console.log(personResult.next());
// console.log(personResult.next());
// console.log(personResult.next());
// console.log(personResult.next());

let res = personResult.next();
res = personResult.next(); 
res = personResult.next();
res = personResult.next();
if(!res.done){
    console.log(res.value);
}
else{
    console.log("No more to loop")
}





// --------dynamic Iterator---------

function numIterator(count) {
    let index = 0;

    return {
        next: () => {
            return index < count ? {value: index++, done: false} : {done: true};
        }
    }
}

let num = numIterator(3); // (value in bracket) is dynamic, so you can change you want (2)/  (5)

console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());



// ----------Generator-------
function* numGen() {
    yield 1;
    yield 2;
    yield 3;
}

let val = numGen();
console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());

// ---------Dynamic-Generator-------
// function* numGen(){
//     let index = 0;
//     while(true){
//         yield index++;
//     }
// }

