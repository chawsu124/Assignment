//Most used built-in functions and methods//

// Array map 

const customers = [
    {name: "customer1",email: "cus1@gmail.com",gender: "male",age: 21, },
    {name: "customer2",email: "cus2@gmail.com",gender: "female",age: 22, },
    {name: "customer3",email: "cus3@gmail.com",gender: "male",age: 23, },
    {name: "customer4",email: "cus4@gmail.com",gender: "female",age: 24, }
]

// ES5 , How to insert new object property at the last index  in array
for(let i = 0;i < customers.length;i++){
    customers[i].bookings = [];//  bookings: []
}

//ES6 , How to insert new object property at the last index  in array
// arrayName.map built-in function(callback function)

customers.map(addBookingArrayToCustomerObj);

const addBookingArrayToCustomerObj = (element) => {
    element.bookings = [];
    return element;
}

// or you can write here too
customers.map((element) => {
                                element.bookings = [];
                                return element;
} );

