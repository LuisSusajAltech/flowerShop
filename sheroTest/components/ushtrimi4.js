const zgjidhja4 = retZgj(3);
const ush4 = root.children[3];
zgjidhja4.classList.add("slider-cont");

const news = [
    "Shero News: Proudly Announcing Beth Shero as CEO",
    "What is Google Trends and How to Use It For Your Marketing Strategy",
    "2023 BigCommerce Themes Guide: Best Themes for Optimal Conversions",
]
let activeSlide = 0;

const retImgSrc = (i) => `../assets/slide-${i}.jp${i == 1 ? "e" : ""}g`;

ush4.appendChild(arrow("left", 3));
ush4.appendChild(arrow("right", 3));

for(let i = 0; i < news.length; i++){
    const slideTxt = news[i];
    const slide = document.createElement("div");
    slide.className = `slide`
    slide.innerHTML = `<img src="${retImgSrc(i+1)}"><span class="news">${slideTxt}</span>`;
    zgjidhja4.append(slide)
}

const slides = document.getElementsByClassName("slide");


function showImage(index) {
    const prevIndex = (index - 1 + slides.length) % slides.length;
    slides[prevIndex].classList.remove("active");
    slides[index].classList.add("active");
}
function showNextImage() {
    activeSlide = (activeSlide + 1) % slides.length;
    showImage(activeSlide);
}

function showPrevImage() {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    showImage(activeSlide);
}
showImage(activeSlide);
document.getElementById('left3').addEventListener("click", showPrevImage);
document.getElementById('right3').addEventListener("click", showNextImage);