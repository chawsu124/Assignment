// -------Promise Chaining-------- //
const login = () => {
    const loginPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Synchronous fun: and accepted after 2 seconds.")
             }, 2000);
    });
    return loginPromise;
}

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Data arrived.")
             }, 1000);
    });
}

const getUserPhoto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Photo have been fetched.")
             }, 2000);
    });
}

const getUserFriends = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Friends have been fetched.")
             }, 2000);
    });
}

const showHomeFeed = (data) => {
    console.log("Making home feed using data: ", data);
}

       // Promise Chaining // 
       // first way // simple code to use .then() or .catch() //
login()
       .then((loginData) => {
           console.log("First .then fun: result is : ", loginData);
           return fetchData();// Don't forgot return // if you forget return, second .then fun: result is underfined
                           // If call reject() in fetchData(), it reach to .catch(error)
       })
       .then((dataFromFetchData) => {
           console.log("Second .then fun: result is : ",dataFromFetchData);
           return getUserPhoto();// Don't forgot return // if you forget return, third .then fun: result is underfined
                           // If call reject() in getUserPhoto(), it reach to .catch(error)
       })
       .then((userPhoto) => {
           console.log("Third .then fun: result is : ",userPhoto);
            return getUserFriends();// Don't forgot return // if you forget return, fourth .then fun: result is underfined
                           // If call reject() in getUserFriends(), it reach to .catch(error)
        })    
       .then((userFriends) => {
           console.log("Fourth .then fun: result is : ",userFriends);
           showHomeFeed(userFriends);
       })
   
.catch((error) => {
           console.log("It is rejected.", error);
       });


        // -----------Promise Chaining using async await-----------
        // follow code is okay if all fun: called resolve()
       // second way // use async await // but cause error and don't run follow code if anyone fun() call reject()  //
const builtUI = async () => { // async --> async is using couple keyword of await
    const loginData = await login();// await --> waiting until login() is finished //after login() finished, run follow code 
    console.log(loginData);

    const dataFromFetchData = await fetchData();// await --> waiting until fetchData() is finished //after fetchData() finished, run follow code 
    console.log(dataFromFetchData);

    const userPhoto = await getUserPhoto();// await --> waiting until getUserPhoto() is finished //after getUserPhoto() finished, run follow code 
    console.log(userPhoto);

    const userFriends = await getUserFriends();// await --> waiting until getUserFriends() is finished //after getUserFriends() finished, run follow code 
    console.log(userFriends);

    showHomeFeed(userFriends);
}
builtUI(); // call builtUI() fun:

 
        // Promise Chaining using async await// it is ok any fun() call resolve or reject
       // third way // use async await //  use try catch
const builtUItrycatch = async () => {
    try{
        const loginData = await login();// await --> waiting until login() is finished //after login() finished, run follow code 
        console.log(loginData);

        const dataFromFetchData = await fetchData();// await --> waiting until fetchData() is finished //after fetchData() finished, run follow code 
        console.log(dataFromFetchData);

        const userPhoto = await getUserPhoto();// await --> waiting until getUserPhoto() is finished //after getUserPhoto() finished, run follow code 
        console.log(userPhoto);

        const userFriends = await getUserFriends();// await --> waiting until getUserFriends() is finished //after getUserFriends() finished, run follow code 
        console.log(userFriends);

        showHomeFeed(userFriends);
    }catch(error){
            console.log("Error is: ", error);
    }
}
builtUItrycatch();// call builtUI() fun:


        // Promise Chaining using async await// if anyone fun() call reject, running stop the error point sentence 
       // fourth way // use async await //
const builtUICatch = async () => { 
        const loginData = await login();
        console.log(loginData);
    
        const dataFromFetchData = await fetchData();
        console.log(dataFromFetchData);
    
        const userPhoto = await getUserPhoto();
        console.log(userPhoto);
    
        const userFriends = await getUserFriends();
        console.log(userFriends);
    
        showHomeFeed(userFriends);
}

console.log("first");
console.log("second");
// if anyone fun call reject() in builtUICatch(), running stop the error point sentence
// but run code out of builtUICatch() // so you will find first and second output

builtUICatch().catch((error) => {
    console.log("Error :", error);
}); // call builtUI() fun: and return .then and .catch from Promise // 
// so call .catch() 

console.log("third"); // but run code out of builtUICatch() // so you will find third