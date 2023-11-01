// 반지름을 입력받아 원의 넓이와 둘레를 출력한다.
// 반지름은 프롬포트로 입력 받는다.
// 원의 넓이와 둘레를 구하는 함수를 각각 작성합니다.
// 넓이와 둘레는 소수 3자리까지 출력합니다.
function getArea(num) {
    return num * num * Math.PI;
}
function getAround(num) {
    return 2 * num * Math.PI;
}

const result = document.querySelector("#result");

let num = prompt("반지름을 입력하세요");

result.innerText = `지름은 ${Math.round(getAround(num))}이고 넓이는 ${Math.round(getArea(num))}`;