//Document Object Model (DOM) CRUD//

// C (Create)
const h1Element = document.createElement("h1");
const textNode = document.createTextNode("Welcome To Myanmar");
h1Element.appendChild(textNode);
const tagCollection = document.getElementsByTagName("body");
const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

// R (Read)
const readElement = document.getElementsByTagName("h1")[0];
console.log("Text inside h1 element is : ", readElement.textContent);

// U (Update)
readElement.textContent = "Hello Yangon";
console.log("Text inside h1 element after Update is : ", readElement.textContent);

// D (Delete)
readElement.remove();