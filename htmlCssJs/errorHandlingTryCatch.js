//when you use try catch error handling, 
//do instruction in try and if find error, do in catch 
//And then, still doing instruction under try catch
try{
    const num = 1;
    num++;
}catch(error){
    console.log("Catch Error is : ",error);
}

let number = 1;
while(number < 10){
    console.log("Your number is : ", number)
    number++;//Exit condition when number is 10
}