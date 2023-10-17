const button = document.querySelector("button");

button.addEventListener("click", () => {
    let newP = document.createElement("p");
    let newText = document.createTextNode("안녕하세요");
    newP.appendChild(newText);
    let basicNode = document.querySelectorAll("p")[2];
    document.body.insertBefore(newP, basicNode);
}, {once : true});
