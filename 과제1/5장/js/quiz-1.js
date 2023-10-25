const button = document.querySelector("#view");
const detail = document.querySelector("#detail");

button.addEventListener("click", () => {
    detail.classList.toggle("hidden");
});