const button = document.querySelector("#bttn");
const box = document.querySelector("#noti-box");

button.addEventListener("click", () => {
    let div = document.createElement("div");
    div.innerText = "알림 내용이 표시됩니다.";
    div.classList.add("noti");
    box.appendChild(div);
    setTimeout(() => box.removeChild(div), 3000);
});