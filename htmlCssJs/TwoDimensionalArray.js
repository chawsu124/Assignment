// Two Dimensional Array

const num1 = [1,2,3];//one dimensional array
const num2 = [[1,2],[3,4],[5,6]];//Two dimensional array

num1[2];//3
num1[0];//1
num2[1];//[3,4]

//Looping one dimensional array 
for(let i = 0;i < num1.length;i++){
    let element = num1[i];
    console.log("array element is ", element);
}

//Looping Two dimensional array 
//you should use different variable name of index name in outer loop and inner loop
// (outer --> i) (inner --> j)
for(let i = 0;i < num2.length;i++){
    let currentArray = num2[i];//[1,2]
    for(let j = 0;j < currentArray.length;j++){
        let currentElement = currentArray[j];
        console.log("Current element is ",currentElement);
    }
}