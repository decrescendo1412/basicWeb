const name = document.querySelector("#username");
const major = document.querySelector("#major");
const button = document.querySelector("button");
const tbody = document.querySelector("tbody");
button.addEventListener("click", (e) => {
    e.preventDefault();
    let newTr = document.createElement("tr");
    let newName = document.createElement("td");
    let nameNode = document.createTextNode(name.value);
    let newMajor = document.createElement("td");
    let majorNode = document.createTextNode(major.value);
    newName.appendChild(nameNode);
    newTr.appendChild(newName);
    newMajor.appendChild(majorNode);
    newTr.appendChild(newMajor);
    tbody.appendChild(newTr);
    name.value = '';
    major.value = '';
});