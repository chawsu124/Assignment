// Nodelist array //
var boxes = document.querySelectorAll(".box");//Receive nodelist of green box, red box, blue box

// ES 5 //
// var boxesArray5 = Array.prototype.slice.call(boxes);// in ES5, use this way to get nodelist to be in array form

// boxesArray5.forEach(function(current){
//     current.style.backgroundColor = "blue";
// })


var boxesArray5 = Array.prototype.slice.call(boxes);

for(var i=0;i<boxesArray5.length;i++){
    if(boxesArray5[i].className === "box blue"){
        continue;
    }
    boxesArray5[i].textContent = "I'm blue 2";
}





// ES 6 //
var boxesArray6 = Array.from(boxes);// in ES6, use this way to get nodelist to be in array form

boxesArray6.forEach((current) => {
    current.style.backgroundColor = "red";
})