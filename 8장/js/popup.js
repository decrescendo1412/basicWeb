// 1. 브라우저 열면 팝업 열기
// 팝업창 오픈
window.open("notice.html", "이벤트 팝업", "width=400 height=300");

// 2. 버튼을 클릭하면 팝업열기
const button = document.querySelector("button");
button.addEventListener("click", () => window.open("notice.html","이벤트 팝업", "width=400 height=300 left=300 top=200"));
