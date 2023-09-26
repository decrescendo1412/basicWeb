// 두 수를 전달 받아 곱셈하는 화살표 함수 정의
let mul = (a, b) => { return a * b; }
// 두 정수 입력 받기
let a = parseInt(prompt("첫 번째 값을 입력하세요"));
let b = parseInt(prompt("두 번째 값을 입력하세요"));
// 결과 화면에 출력하기
document.write(mul(a,b));