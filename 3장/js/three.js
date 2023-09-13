let num = prompt("숫자를 입력하세요")
if(num) {
    num = parseInt(num);
    if (num % 3 == 0) {
        alert("3의 배수입니다.")
    } else {
        alert("3의 배수가 아닙니다.")
    }
}