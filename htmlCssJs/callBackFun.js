//CallBack function --> (call function as a argument parameter) from another function

//if waiting --> Synchronous code
//if not waiting --> Asynchronous code


//function in Global Scope
const fetchData = (callback) => {
    console.log("Fetching data from server ...");
    // asynchronous code
    // asynchronous code
    // asynchronous code
    console.log("Finished data.")
    callback();
}

//function in Global Scope
const outerfunction = () => {
    //function in Local Scope
    const showUserProfile = () => {
        console.log("Code to show user profile here...")
    }
    fetchData(showUserProfile);// don't need () in callback function
}

//must call outerfunction()
outerfunction();//   Fetching data from server ...
                   //Finished data.
                   //Code to show user profile here...