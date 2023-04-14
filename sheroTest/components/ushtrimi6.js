const zgjidhja6 = retZgj(5);

const returnCode = (code) => `<span>${code}</span>`;

let user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
};

const keys = Object.keys(user);

const showDiv = document.createElement("div");
showDiv.id = "showDiv";
showDiv.innerHTML = `<span class="title">The Object</span><br>` + returnCode(`let user = ${JSON.stringify(user)}`);

const properties = document.createElement("div");
properties.id = "properties";
properties.innerHTML = `<span class="title">The Object Values</span><br>`;

const noSecondValue = document.createElement("div");
noSecondValue.id = "noSecondValue";

const lengthOfProperties = document.createElement("div");
lengthOfProperties.id = "lengthOfProperties";
lengthOfProperties.innerHTML = `<span class="title">The length of the Properties is : <br><span>${keys.length}</span></span>`;

for( vals in user){
    const span = document.createElement("span");
    span.innerHTML = vals.replace("_", " ") + " : " + user[vals];
    const br = document.createElement("br");
    properties.append(span, br) 
}

if(keys.length > 1){
    delete user[keys[1]];
}

noSecondValue.innerHTML = `<span class="title">The Object after deleting the second property</span><br>` + returnCode(`let user = ${JSON.stringify(user)}`);

zgjidhja6.append(showDiv, properties, noSecondValue, lengthOfProperties);