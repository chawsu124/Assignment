// position ancestor , offsetLeft , offsetWidth //

const item1Tag = document.querySelector(".item1");
const item2Tag = document.querySelector(".item2");

// offsetLeft is the length that take the left of ancestor to the calling div.
console.log("Item1's offsetLeft is : ", item1Tag.offsetLeft);// output value is in px form
console.log("Item2's offsetLeft is : ", item2Tag.offsetLeft);// output value is in px form

// offsetWidth is the width of calling div.
console.log("Item1's offsetWidth is : ", item1Tag.offsetWidth);// output value is in px form
console.log("Item2's offsetWidth is : ", item2Tag.offsetWidth);// output value is in px form
