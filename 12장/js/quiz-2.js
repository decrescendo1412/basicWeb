const input = document.querySelector("#user-number");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
    try {
        if (input.value == '')
            throw "숫자를 입력하세요";
        else if(input.value < 10)
            result.innerText = input.value;
        else if (input.value >= 10) 
            throw "10보다 작은 수를 입력하세요.";
        else 
            throw "숫자를 입력하세요";
    } catch(err) {
        alert(err);
    } finally {
        input.value = "";
    }
})