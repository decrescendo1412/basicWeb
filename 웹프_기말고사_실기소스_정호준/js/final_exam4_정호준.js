// result 가져오기
const docResult = document.querySelector("#result");
// 저의 뜨거운 마음입니다
const str = "이번학기 감사했습니다!!!";
// 프로미스 생성하기
const message = new Promise((resolve, reject) => {
    if(str === "이번학기 감사했습니다!!!") {
        setTimeout(() => {
            resolve("즐거운 방학이다!");
        }, 1000);
    } 
    else {
        reject("감사합니다!");
    }
});
// 프로미스 사용
message
    .then( // 제 마음이 진실이면 true
        result => docResult.innerText = `${result}`
    )
    .catch( // 아니면 false입니다
        err => docResult.innerText = `${err}`
    );