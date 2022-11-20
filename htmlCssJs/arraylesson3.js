//for loop
//for loop can be ok to use in Array (using ArrayName.length)
const city = ["Yangon","Nagapli","Sittway","Innwa"]
for(let i = 0;i < city.length;i++){
    let cityName = city[i]
    console.log(cityName)
}

//for in loop 
//for loop can not ok to use in Object (cann't using .length builtin fun:) 
//So we can use for in loop in Object
const customers = {name: "SuSu",phone: "09123456",email: "susu@gmail.com"}

//dot notation(.)
customers.email //susu@gmail.com

//bracket notation([""])
customers["email"] //susu@gmail.com
customers["name"] //SuSu
customers["phone"] //09123456

//use for in loop
for(let custName in customers){
    console.log(custName) //output is --> name
                                        //phone
                                        //email
}

for(let custProperty in customers){
    console.log(customers[custProperty]) //output-->    //SuSu 
                                                    //09123456 
                                                    //susu@gmail.com
}

for(let custBothtwo in customers){
    console.log(custBothtwo,customers[custBothtwo]) //output-->     //name SuSu 
                                                                    //phone 09123456 
                                                                    //email susu@gmail.com
}

