const zgjidhja2 = retZgj(1);
const movableDiv = document.createElement("div");
movableDiv.id = "movableDiv"
movableDiv.textContent = "Move Me !"
const arrow = (cls, i) => {
    const arr = document.createElement("button")
    arr.id = cls + i;
    arr.textContent = cls == "left" ? "<" : ">";
    return arr;
}
zgjidhja2.append(arrow("left", 1), movableDiv, arrow("right", 1))

const moveDiv = document.getElementById("movableDiv");
const leftButton = document.getElementById('left1');
const rightButton = document.getElementById('right1');

leftButton.addEventListener('click', function() {
    const currentLeft = parseInt(moveDiv.style.left) || 0;
    moveDiv.style.left = currentLeft - 10 + 'px';
});
  
rightButton.addEventListener('click', function() {
    const currentLeft = parseInt(moveDiv.style.left) || 0;
    moveDiv.style.left = currentLeft + 10 + 'px';
});