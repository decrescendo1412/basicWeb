// 불러오기
const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");
// 클릭하면 acitve class 추가
open.addEventListener("click", () => {
    modalBox.classList.add("active");
});
// 클릭하면 active class 제거
close.addEventListener("click", () => {
    modalBox.classList.remove("active");
});