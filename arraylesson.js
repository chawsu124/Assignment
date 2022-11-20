//Array Lesson
// var name = ['MgMg','KoKo','SuSu'];//Create Array and insert value
// var age = new Array(20,25,16);//Create Array and insert value
// console.log(name);
// console.log(age);

// name.push('Ma Ma');//insert value to final index of Array
// name.unshift('AyeAye');//insert value to first index of Array
// console.log(name);

// name.pop();//delete final index of Array
// name.shift();//delete first index of Array
// console.log(name);
//console.log(name.indexOf('SuSu'));


var bioMgMg = ['MgMg','Gyi',26,'designer','Red'];
var isDesigner = bioMgMg.indexOf('designer') === -1 ? 
    'He is not a designer' : 'He is a designer';
console.log(isDesigner);


let arr = [1,2,3,4,5,6];
let arrToString = arr.toString();// 1 2 3 4 5
let arrCon = Array.isArray(arr);// true

