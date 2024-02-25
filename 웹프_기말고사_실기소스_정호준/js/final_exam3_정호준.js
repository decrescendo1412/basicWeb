// 숫자 입력
const input = prompt("숫자를 입력하세요");

const docResult = document.querySelector("#result");
// 프로미스 생성
const number = new Promise((resolve, resject) => {
    if(input >= 0) {
        resolve("양수");
    }
    else {
        resject("음수");
    }
});

// 프로미스 사용
number
    .then( // true일때
        result => docResult.innerText = `${input}은(는) ${result}입니다.`
    )
    .catch( // false 일때
        err => docResult.innerText = `${input}은(는) ${err}입니다.`
    );