const body = document.querySelector("body");
const button = document.querySelector("button");

button.onclick = () => {
    body.classList.toggle("dark");
}
