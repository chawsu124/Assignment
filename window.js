// -------------window object ----------

// window.close();
// window.alert("Hello World");

let heading = document.querySelector(".heading");
let btnChange = document.querySelector(".btnChange");
// let yourname = prompt("Enter your name...");
// heading.innerHTML = yourname;

// let con = confirm("Is your age under 18 ?");
// let ans = con ? "Your are under 18" : "No, I'm not under 18" ;
// heading.innerHTML = ans;
// heading.innerHTML = window.innerHeight;
// heading.innerHTML = window.innerWidth;

heading.style.background = "yellow";
heading.style.color = "black";
heading.style.height = "500px";

//console.log(window.scrollY);

btnChange.addEventListener("click", () => {
    window.location.href = "box.html";
    // window.location.reload();
})
