// -----------Promise Chaining------------- //
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
 // the next the way, you can code using async await //