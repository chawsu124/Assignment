// setTimeout //
const boxTag = document.querySelector(".box");
const btnTag = document.querySelector(".btnColorChange");

btnTag.addEventListener("click", () => {
    boxTag.style.backgroundColor = "blue";
    setTimeout(() => {
        boxTag.style.backgroundColor = "yellow";
    }, 2000);
})