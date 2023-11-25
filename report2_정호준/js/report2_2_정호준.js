// open 요소 가져오기
const open = document.querySelector("#open");
// close 요소 가져오기
const close = document.querySelector("#close");
// medal-box 요소 가져오기
const box = document.querySelector("#modal-box");

let modalTimer; // 타이머 변수
// open 이벤트 추가
open.addEventListener("click", () => {
    // box에 active 클래스 추가
    box.classList.add("active");
    // 이미 타이머가 실행 중인지 확인하고 중지
    if(modalTimer) {
        clearTimeout(modalTimer);
    }
    // 시간이 5초 지나면 active 클래스 제거 및 타이머 설정
    modalTimer = setTimeout(() => {
        box.classList.remove("active");
    }, 5000);
});
// close 이벤트 추가
close.addEventListener("click", () => {
    // box에서 active 클래스 제거
    box.classList.remove("active");
})