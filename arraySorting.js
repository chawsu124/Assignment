//--------------Array Sorting----------

let numArr = [12,43,5,6,1,9,2,3];

numArr.sort();
console.log(numArr);// 1 12 2 3 43 5 6 9

// ----------the older way
// function filter(x,y){
//     return x - y;
// }
// numArr.sort(filter);// .sort(function)
// console.log(numArr);// 1 2 3 5 6 9 12 43

// function filter(x,y){
//     return y - x;
// }
// numArr.sort(filter);// .sort(function)
// console.log(numArr);// 43 12 9 6 5 3 2 1



//----------the newest way / the best way
numArr.sort((x,y) => x - y);
console.log(numArr);// 1 2 3 5 6 9 12 43

numArr.sort((x,y) => y - x);
console.log(numArr);// 43 12 9 6 5 3 2 1



// find in array
let number = [13,43,5,6,8,2];

let result = number.find((x) => x < 13);

console.log(result);//