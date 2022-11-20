// Throw Error //

const registerUser = (user) => {
    if(!user.name || !user.email){
        // send error to sentry using fetch method
        throw new Error("user must have both name and email");

        // or //
        // const registerError = new Error("user must have both name and email");
        // return registerError;
    }
    return "Register successfully";
}

const user = {name: "MSquare Programming"};

try{
    const status = registerUser(user);
    console.log(status);
}catch(error){
    console.log("Error : ", error);
}

console.log("rest of code");
console.log("rest of code");
console.log("rest of code");