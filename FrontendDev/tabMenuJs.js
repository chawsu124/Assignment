// Tab Menus //

const tabMenusTag = document.querySelector(".tabMenus");
const sliderTag = document.querySelector(".slider");
const ulTag = document.querySelector("ul");
const textTag = document.querySelector(".text");

const tabs = ["home", "services", "about us", "contact us", "login"];


const handleChange = (event) => {
    const clickTagId = event.target.id;
    const clickliTag = document.getElementById(clickTagId);
    const clickliTagWidth = clickliTag.offsetWidth;
    const clickliTagOffsetLeft = clickliTag.offsetLeft;
    sliderTag.style.width = clickliTagWidth + "px";
    sliderTag.style.transform = `translateX(${clickliTagOffsetLeft}px)`;
    
}

for(let i = 0;i < tabs.length;i++){
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click", handleChange);
    ulTag.append(liTag);
    if(i === 0){
       sliderTag.style.width = liTag.offsetWidth + "px";
    }
}
