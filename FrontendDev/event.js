// ---------Events---------- //

// event handler / event listener / event emitter
// an event occurs , run some codes

const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("changeImg")[0];// HTML collection []
const originalImg = image.src;
const imgArray = ["img1.jpg",
                    "img2.jpg",
                    "img3.jpg",
                    "img4.jpg",
                    "img5.jpg"
];


let counter = 0;
const myFunction = () => {
    if(counter === 5){
        image.src = originalImg;
        counter = 0;
        return;
    }
    const imgLink = imgArray[counter];
    image.src = imgLink;
    counter += 1;
    console.log("counter value is :", counter);
};

myButton.addEventListener("click",myFunction);
