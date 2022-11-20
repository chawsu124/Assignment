// Local Storage 1 //
const btnTag = document.querySelector(".btn");
const postBtnTag = document.querySelector(".btn-info");
const commentInputTag = document.querySelector(".commentInput");
const commentContainerTag = document.querySelector(".commentContainer");
const parentTag = document.querySelector(".parent");

const appendComment = (commentValue) => {
    const commentDiv = document.createElement("div");
    commentDiv.append(commentValue);
    commentDiv.classList.add("comment", "list-group-item");
    commentContainerTag.append(commentDiv);
    commentInputTag.value = "";
}

const openToastAlertTag = () => {
    parentTag.innerHTML = "";
    const toastAlertContainerTag = document.createElement("div");
    toastAlertContainerTag.classList.add("toastAlertContainer");

    //create toastAlertTextTag
    const toastAlertTextTag = document.createElement("div");
    toastAlertTextTag.classList.add("toastAlertText");
    toastAlertTextTag.append("We use cookies, you continued use of our sites implies you agree to this. See details");

    // create closeButtonTag
    const closeButtonTag = document.createElement("div");
    closeButtonTag.append("Close");
    closeButtonTag.classList.add("btn", "btn-light");

    toastAlertContainerTag.append(toastAlertTextTag, closeButtonTag);

    parentTag.append(toastAlertContainerTag);

    parentTag.style.bottom = `-${parentTag.offsetHeight}px`;

    setTimeout(() => {
        parentTag.style.bottom = "0px";
    }, 100);

    closeButtonTag.addEventListener("click", () => {
        localStorage.setItem("accepted", "1");
        parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
    })
}

window.addEventListener("load", () => {
    const accepted = localStorage.getItem("accepted");
    if(accepted !== "1"){
        openToastAlertTag();
    }
   
})

postBtnTag.addEventListener("click", () => {
    const commentValue = commentInputTag.value;
    
    // localStorage.setItem("com", commentValue);
    appendComment(commentValue);
})