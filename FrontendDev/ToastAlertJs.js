// Toast Alert //
const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
    openToastAlert.innerHTML = "";
    const toastAlertTag = document.createElement("div");
    toastAlertTag.append("Your file was sucessfully uploded.");
    toastAlertTag.classList.add("toastAlert");
    parentTag.append(toastAlertTag);

    toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`;// - is out of viewport
    // that mean the parent div is hide from viewport and it is under the viewport 

    setTimeout(() => {
        toastAlertTag.style.bottom = "0px";
    }, 100); // will appear the bottom of viewport or end of viewport

    setTimeout(() => {
        toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`;// - is out of viewport
    }, 2000);// after 2s long 
}

buttonTag.addEventListener("click", () => {
    openToastAlert();
})