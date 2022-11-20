// -----------SessionStorage---------

let lsForm = document.querySelector("#localForm");
let inputName = document.querySelector("#name");
let inputAge = document.querySelector("#age");
let dbDelete = document.querySelector("#del");

let addDataToSS = (obj) => {
    let userArr = getDataFromSS();
    if(userArr == null) {
        userArr = [];
        userArr.push(obj);
        saveToSS(userArr);
    }
    else{
        let ind = userArr.findIndex((user) => user.name == obj.name);
        if(ind == -1){
            userArr.push(obj);
            saveToSS(userArr);
        }else{
            alert("user already exists with that name");
        }
        
    }
}

let saveToSS = (arrobj) => {
    let data = JSON.stringify(arrobj);
    sessionStorage.setItem("sessionDB", data);
}

let getDataFromSS = () => {
    let str = sessionStorage.getItem("sessionDB");
    let obj = JSON.parse(str);
    return obj;
}

let dbDeleteFromSS = () => {
    sessionStorage.removeItem("sessionDB");
}

lsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = inputName.value;
    let age = inputAge.value;
    //console.log(`Your name is : ${name} and age is : ${age}`);

    let user = {
        username : name,
        userage : age
    }
    addDataToSS(user);
})


dbDelete.addEventListener("click", () => {
    console.log("Delete sessionDB");
    dbDeleteFromSS();
});