// Useful DOM Methods and Properties //

// console.log(document);// all html tags in out web page
// console.log(document.all[0]);// html tags 
// console.log(document.all[1]);// head tags
// console.log(document.all[2]);// body tags
// console.log(document.URL);// url link of our web page
// console.log(document.title);// title of our web page
// console.log(document.form);// if our web page has form tag
// console.log(document.links);// if our web page has links

const bodyElement = document.getElementsByTagName("body")[0];// HTML collections
console.log("body Element : ", bodyElement);

// const parentDiv = document.getElementsByClassName("parent")[0];// HTML collections
// console.log("Parent Element : ", parentDiv);

// <div class="parent">
//             <div>ChildOne</div>
//             <div>ChildTwo</div>
//         </div> 
const parentDiv = document.createElement("div");
parentDiv.classList.add("parent", "testClass");
parentDiv.classList.remove("testClass");

const childDivOne = document.createElement("div");
childDivOne.classList.add("childOne");
// const childDivOneText = document.createTextNode("Child One");
// childDivOne.appendChild(childDivOneText);
// or
childDivOne.append("Child One");

const childDivTwo = document.createElement("div");
childDivTwo.classList.add("childTwo");
// const childDivTwoText = document.createTextNode("Child Two");
// childDivTwo.appendChild(childDivTwoText);
// or 
childDivTwo.append("Child Two");

// parentDiv.appendChild(childDivOne);
// parentDiv.appendChild(childDivTwo);
// or
parentDiv.append(childDivOne,childDivTwo);

bodyElement.appendChild(parentDiv);

const styleTestDiv = document.getElementsByClassName("styleTest")[0];
console.log("styleTestDiv's width :", getComputedStyle(styleTestDiv).width);
console.log("styleTestDiv's height :", getComputedStyle(styleTestDiv).height);
console.log("styleTestDiv's backgroundColor :", getComputedStyle(styleTestDiv).backgroundColor);