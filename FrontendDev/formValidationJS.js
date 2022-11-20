//-------Form Validation---------//

let form = document.querySelector("#f1");
let fname = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("#btnC");


let nameVar = false;
let emailVar = false;
let pwVar = false;
// \

form.preventD

function nameChange() {
    let str = fname.value;
    //  console.log(fname.value);
    let reg = /^[a-zA-Z0-9]+$/;

    if(!reg.test(str)){
        fname.classList.add("is-invalid");
        nameVar = false;
    }else{
        fname.classList.remove("is-invalid");
        nameVar = true;
        console.log("name true");
    }
    setEnable();
}
function emailChange() {
    let str = email.value;
    // mgmg123.coder@gmail.com
    let reg = /^([a-zA-Z0-9_\-\.]+)@([a-z]+)\.([a-z]{2,5})$/;

    if(!reg.test(str)){
        email.classList.add("is-invalid");
        emailVar = false;
    }else{
        email.classList.remove("is-invalid");
        emailVar = true;
        console.log("email true");
    }
    setEnable();
}
function passwordChange() {
    let str = password.value;
    let reg = /^[a-zA-Z0-9\W]{6,20}$/;

    if(!reg.test(str)){
        password.classList.add("is-invalid");
        pwVar = false;
    }else{
        password.classList.remove("is-invalid");
        pwVar = true;
        console.log("pw true");
    }
    setEnable();
}

function setEnable() {
        if(nameVar && emailVar && pwVar){
            btn.classList.remove("disabled");
        }else{
            btn.classList.add("disabled");
        }
}

fname.addEventListener("keyup",nameChange);
email.addEventListener("keyup",emailChange);
password.addEventListener("keyup",passwordChange);

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(nameVar && emailVar && pwVar){
        console.log("click");
        alert("hey click correctly");
    }
});

