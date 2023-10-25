const button = document.querySelector("#bttn");
const menu = document.querySelector("#nav");

button.addEventListener("click", () => {
    menu.classList.toggle("active");
    button.classList.toggle("active");
});