const root = document.getElementById("root");
const ushtrimet = [
    `Create two divs. One blue with the text inside "Before Hover." And another red one that is hidden with the text "After Hover." When you hover over the blue one, the red will show, and the blue one will be hidden. When you remove the mouse from the red one, the blue one will reappear`,
    `Create one div and two buttons right and left. When clicking right, move the div by 10px right, and when clicking left, move the div by 10px left`,
    `Create five dynamic divs with javascript. Each div should have your name letters as text hidden in the beginning. After you hover the mouse over the divs, the letters should appear. Example: If the name is <a target="_blank" href="https://sherocommerce.com/" class="custom-link">SHERO</a>`,
    `Add three images on a page full width but show only the first one as default. Create two arrows below the images and slide the next one when clicking on the arrows`,
    `Write a JavaScript function to get the last day of the month. The function should get the month as a parameter and should return the last day of the current month`,
    `There is a given object, write a javascript program to print the given object's properties, delete the second property and get the object's length`,
];

for(let i = 1; i <= ushtrimet.length; i++){

    const ushtrim = ushtrimet[i-1];
    const name = `ushtrimi${i}`;

    const div = document.createElement("div");
    div.id = name;
    div.className = "ushtrimi";
    div.innerHTML = `<span class="desc">${i}. ${ushtrim}.</span><div class="zgjidhja"></div>`;

    const script = document.createElement("script");
    script.src = `../components/${name}.js`;
    
    document.head.appendChild(script);
    root.appendChild(div);
}

const retZgj = (s) => root.children[s].lastChild;