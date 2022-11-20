// -------------------Promise-------------- 
// ------------Synchronous 
// Promise is built-in constructor // it have resolve and reject function 
// In resolve fun: , it has .then() fun:
// In reject fun: , it has .catch() fun:

// const fetchData = new Promise((resolve, reject) => {
//     resolve("Accept...")
// });

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Synchronous fun: and accepted after 3 seconds.")
//     }, 3000);
// });


            // fetchData Promise resolve and reject //
// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Synchronous fun: and rejected after 3 seconds.")
//     }, 3000);
// });

// fetchData.then((data) => {
//     console.log("Hello it is accepted.", data);
// }).catch((error) => {
//     console.log("Hello it is rejected.", error);
// })


            //-------------------create (login and fetching) call Promise constructor //
const login = () => {
    const loginPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Synchronous fun: and accepted after 2 seconds.")
             }, 2000);
    });
    return loginPromise;
}

const fetching = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Data arrived.")
             }, 2000);
    });
}

const showData = (data) => {
    console.log("Making home feed using data: ", data);
}

const getUserPhoto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Photo have been fetched.")
             }, 2000);
    });
}

login()
    .then((loginData) => {
        console.log(loginData);
        fetching()
            .then((userData) => {
                console.log(userData);
                showData(userData);
            })
    }).catch((error) => {
         console.log("It is rejected.", error);
}) // output is --> Synchronous fun: and accepted after 2 seconds.
                    //Data arrived.
                    //Making home feed using data:  Data arrived.



            //----------- callback hell (or) Pyramid of doom----------------- //
// Example 
login()
    .then((loginData) => {
        console.log(loginData);
        fetching()
            .then((fetchingData) => {
                console.log(fetchingData);
                showData(fetchingData);
                })
                .then(() => {
                    getUserPhoto();
                })
                .catch((error) => {
                console.log("It is rejected.", error);
                })  
            })
            .catch((error) => {
                console.log("It is rejected.", error);
           }) 
    .catch((error) => {
         console.log("It is rejected.", error);
        }) 