//while loop
//while loop must have exist condition

let valid = true;
while(valid){
    let promptValue = prompt("Please enter a number between 1 and 100");
    const parseValue = parseInt(promptValue,10);
    if(parseValue >1 && parseValue <100)
    {
        console.log("Your number is: ",parseValue);
        valid = false; //Exit condition
    }
}

let number = 1;
while(number < 10){
    console.log("Your number is : ", number)
    number++;//Exit condition when number is 10
}