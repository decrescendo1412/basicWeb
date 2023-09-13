// 섭씨 온도 = (화씨 온도 - 32) / 1.8
// 프롬프트로 화씨 온도 입력 받는다.
// 섭씨 온도 계산하고, 출력한다.
// 출력은 alert() 또는 document.write() 중 하나 선택().
// 화씨 온도 00도는 섭씨 온도 00도 입니다.
function con(i) {
    return ((i - 32) / 1.8).toFixed(1);
}

let degree = parseFloat(prompt("화씨 온도를 입력하세요"))
document.write(`화씨 온도 ${degree}도는 섭씨 온도 ${con(degree)}도 입니다.`)