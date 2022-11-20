//---------Set()-----------//
// first way
let setArr = new Set();
setArr.add("Mg Mg");
setArr.add("Aung Aung");
setArr.add(200);
setArr.add(500);
setArr.add(() => {
    console.log("Hello");
})

console.log(setArr);// ["Mg Mg","Aung Aung",200,300,() => {console.log("Hello")}]

// second way
let setArr2 = new Set(["Mg Mg","Aung Aung",200,300,() => {console.log("Hello")}]);

console.log(setArr2);//["Mg Mg","Aung Aung",200,300,() => {console.log("Hello")}]
// or
for(let i of setArr2){
    console.log(i);//["Mg Mg","Aung Aung",200,300,() => {console.log("Hello")}]
}
// or
setArr2.forEach((val) => {
    console.log(val);
})

console.log(setArr2.has("Su Su"));// false
console.log(setArr2.has("Mg Mg"));// true

setArr2.delete("Aung Aung"); // Delete "Aung Aung"
console.log(setArr2);//["Mg Mg",200,300,() => {console.log("Hello")}]

// you can use in array form
let arr = Array.from(setArr2);
console.log(arr[2]);//200
console.log(arr[0]);// Mg Mg
console.log(arr[4]());// console.log("Hello")