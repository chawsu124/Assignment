// Shopping List //
const inputTag = document.getElementsByClassName("product")[0];// HTML collection []
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];// HTML collection []

let productID = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () => {
        const classExit = parentDiv.classList.contains("purchased");
        if(classExit){
            parentDiv.classList.remove("purchased");
        }else{
            parentDiv.classList.add("purchased");
        }
    })
    const spanTag = document.createElement("span");
    spanTag.id = productID;
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("far", "fa-trash-alt");
    trashIcon.addEventListener("click", (event) => {
        productContainer.remove();
    })

    const product = productID.toString() + ". " + inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag);
    productContainer.append(parentDiv, trashIcon);
    shoppingListTag.append(productContainer);

    inputTag.value = "";
    productID += 1;
}

inputTag.addEventListener("change", handleChange);