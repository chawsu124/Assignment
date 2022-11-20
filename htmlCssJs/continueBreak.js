const customers = [
    {name: "MgMg",phoneNo: "091234567",email: "mgmg@gmail.com",dob: "2/3/2000",gender: "male"},
    {name: "SuSu",phoneNo: "091234568",email: "susu@gmail.com",dob: "3/3/2000",gender: "Female"},
    {name: "KoKo",phoneNo: "091234569",email: "koko@gmail.com",dob: "7/3/2000",gender: "male"}
]

//for loop
//continue
for(let i = 0;i < customers.length;i++){
    let cust = customers[i];
    if(cust.gender === "male"){
        continue;
    }
    console.log("Sending email to : ",cust.email);
}

//break
for(let i = 0;i < customers.length;i++){
    let cust = customers[i];
    console.log("Sending email to : ",cust.email);
    if(i === 2){
        break;
    }
}

//while
let i = 0;
while(i < customers.length){
    let cust = customers[i];
    i++;//exit condition
    if(cust.gender === "male"){
        continue;
    }
    console.log("Sending email to : ",cust.email);
}

//use while loop to result the first three customers
let i = 0;
while(i < customers.length){
    let cust = customers[i];
    console.log("Sending email to : ",cust.email);
    i++;//exit condition
    if(i === 3){
        break;
    }
}