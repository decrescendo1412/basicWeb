// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수,
function multiple(x, y) {
    return x*y;
}

let x = parseInt(prompt("곱할 첫번째 수를 입력하세요"));
let y = parseInt(prompt("곱할 두번째 수를 입력하세요"));

document.write(`<h1>${x}와 ${y}의 곱은 ${multiple(x,y)}입니다.</h1>`);