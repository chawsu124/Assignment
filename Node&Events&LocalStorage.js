// ----------Node and child Nodes-----------

//ChildNodes are -->// 1 : Element
                    // 2 : Attributes
                    // 3 : Text Node
                    // 8 : Comment
                    // 9 : Document itself
                    // 10 : Doctype


let list = document.querySelector(".list");

//console.log(list.childNodes);// text nodes and li nodes
// console.log(list.childElementCount);// 5 --> cause of having li tags is five tags
// console.log(list.childNodes[0]);// text

//console.log(list.childNodes[0].nextSibling.nextSibling.nextSibling.previousSibling.previousSibling);
 
// console.log(list.childNodes.length);// 11

// console.log(list.firstElementChild.childNodes[0].textContent);// One
// console.log(list.lastElementChild.childNodes[0].textContent);// Five

// console.log(list.firstElementChild.nextSibling.nextSibling.childNodes[0].textContent);// Two

// console.log(list.children[2].childNodes[0].textContent);// Three --> list.children[indexNo: 2]
// console.log(list.children[3].childNodes[0].textContent);// Four --> list.children[indexNo: 3]

// for(let i=0;i<list.childNodes.length;i++){
//     let node = list.childNodes[i];
//     console.log(node);
// }

// ----------create Element ---------

// let headingTag = document.querySelector(".heading");
// let listTag = document.querySelector(".list");

// let liTag = document.createElement("li");
// let text = document.createTextNode("Six");
// let aTag = document.createElement("a");

// aTag.setAttribute("href", "#");// .setAttribute(property, value)

// aTag.append(text);
// liTag.append(aTag);
// listTag.append(liTag);


// let newH1 = document.createTextNode("New Heading");
// let newH1Tag = document.createElement("h1");

// newH1Tag.appendChild(newH1);

//let bodyTag = document.querySelector("body");
// or
// let bodyTag = headingTag.parentNode;

// bodyTag.replaceChild(newH1Tag,headingTag);// New Heading replace in Hello 2022



// let listTag1 = document.querySelector("ul.list");
// let firstChild = document.querySelector("ul > li:first-child");
// let aTag1 = firstChild.childNodes[0];

// aTag1.id = "bibi";

// console.log(aTag1.getAttribute("alt"));//ALter tag


// //----------Events--------
// let btn = document.querySelector(".btnChange");

// Events are :
                // click            // onclick
                // mouseover        // onmouseover
                // mousemove        // onmousemove
                // mouseup          // onmouseup
                // mousedown        // onmousedown
                // mouseenter       // onmouseenter
                // dblclick         // ondblclick
                // mouseleave       // onmouseleave

// btn.addEventListener("mouseenter", (e) => {
//     console.log(e.target.innerText);
// })
// // or
// btn.onmouseenter = (e) => {
//     console.log(e.target.innerText);
// }

//---------Form-Events--------
let form1 = document.querySelector(".formfill");
let input = document.querySelector(".inputext");

form1.addEventListener("submit", (e) => {
    e.preventDefault(); // To not working default target plan
    console.log(input.value);
})


//----input-events are : // keyup //keydown //keypress // focus // blur
// cut // paste // change
input.addEventListener("keyup", (e) => {
    console.log(input.value);
})


//--------LocalStorage-----------
let lsForm = document.querySelector("#localForm");
let inputName = document.querySelector("#name");
let inputAge = document.querySelector("#age");
let datadelete = document.querySelector("#del");

let addDataToLS = (obj) => {
    let data = JSON.stringify(obj);
    localStorage.setItem("localDB", data);
}

let getDataFromLS = () => {
    let str = localStorage.getItem("localDB");
    let obj = JSON.parse(str);
    return obj;
}

let deleteDataFromLS = () => {
    localStorage.removeItem("localDB");
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
    addDataToLS(user);
})


datadelete.addEventListener("click", () => {
    console.log("Delete localDB");
    deleteDataFromLS();
});