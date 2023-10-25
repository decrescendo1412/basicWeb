function getGCD(a, b) {
    let prNum;
    let min = (a>b) ? b : a;
    for(let i = 1; i <= min; i++) {
        if(a % i == 0 && b % i == 0) {
            prNum = i;
        }
    }
    return prNum;
}
const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const button = document.querySelector("#calc");
const resultA = document.querySelector("#result");
button.addEventListener("click", () => {
    let result = getGCD(num1.value, num2.value);
    resultA.innerText = result;
});