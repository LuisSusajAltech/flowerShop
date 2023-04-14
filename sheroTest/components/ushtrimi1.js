const zgjidhja1 = retZgj(0);
const createButton = (backgroundColor, textContent) => {
    const button = document.createElement("button");
    button.style.backgroundColor = backgroundColor;
    button.textContent = textContent;
    button.classList.add("ush1button");
    return button;
};

const blueDiv = createButton("blue", "Before Hover");
blueDiv.id = "blueBtn";
const redDiv = createButton("red", "After Hover");
redDiv.id = "redBtn";
redDiv.classList.add("hide");
zgjidhja1.append(blueDiv, redDiv);

const toggleButtonVisibility = (event) => {
    const ele = event.target;
    const hideEle = ele.id == "blueBtn" ? ele.nextSibling : ele.previousSibling;
    hideEle.classList.toggle("hide");
    ele.classList.toggle("hide");
};

document.addEventListener("mouseover", function(event){
    if(event.target.className == "ush1button"){
        toggleButtonVisibility(event);
    }
});
document.addEventListener("mouseout", function(event){
    if(event.target.className == "ush1button"){
        toggleButtonVisibility(event)
    }
})