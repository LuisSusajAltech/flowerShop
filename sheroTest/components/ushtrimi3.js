const zgjidhja3 = retZgj(2);
const text = "shero";

for (let i = 0; i < text.length; i++) {
  const div = document.createElement("div");
  div.classList.add("name-letter");
  div.textContent = text[i];

  div.addEventListener("mouseover", function() {
    div.classList.add("visible");
  });

  div.addEventListener("mouseout", function() {
    div.classList.remove("visible");
  });

  zgjidhja3.appendChild(div);
}