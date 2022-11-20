//Object --> unordered list 
//Array --> Ordered list
const ordered = ["Yangon","Bago","MyitKyiNa"]
ordered

ordered.length

ordered[0]
ordered[2]

ordered.indexOf("Bago")

ordered.push("Mandalay")//insert last index to array
ordered.shift("NayPyiTaw")//insert first index to array

ordered.pop()//delete last index to array
ordered.unshift()//delete first index to array

ordered

ordered.splice(2,1)//arrayname.splice(index no: you wanna delete to start, how much item you wanna delete)
// "Yangon","Bago"

const carInfo = {
    brand: "Toyota",
    price: 2000000,
    model: 2019
}

ordered.push(carInfo)
ordered

let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8];

let rev = arr1.reverse();
console.log(rev);// 6,5,4,3,2,1

let combine = arr1.concat(arr2);
console.log(combine);// 1,2,3,4,5,6,7,8