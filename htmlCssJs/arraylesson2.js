const customers = [
    {name: "MgMg",phoneNo: "091234567",email: "mgmg@gmail.com",dob: "2/3/2000"},
    {name: "SuSu",phoneNo: "091234568",email: "susu@gmail.com",dob: "3/3/2000"},
    {name: "KoKo",phoneNo: "091234569",email: "koko@gmail.com",dob: "7/3/2000"}
]

const sendEmail = (email) => {
    console.log("Send Email to: ", email)
}

const sendBDdiscont = (email) => {
    console.log("Sending special birthday discount email to: ",email)
}

for(let i = 0;i < customers.length;i++){
    let custEmail = customers[i].email
    let custBD = customers[i].dob
    
    if(custBD == "2/3/2000"){ //example condition
        sendBDdiscont(custEmail)
    }
    else{
        sendEmail(custEmail)
    }
    
}

customers.push({name: "Hnin",phoneNo: "091234570",email: "hnin@gmail.com",dob: "4/3/2000"},
                {name: "May",phoneNo: "091234575",email: "may@gmail.com",dob: "5/3/2000"})
customers
                