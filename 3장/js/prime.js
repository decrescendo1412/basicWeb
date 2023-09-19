let num = parseInt(prompt("정수를 입력하세요")); // 정수를 입력받고 int형으로 변환
let i = num-1; // 정수를 나눌 인자를 정수보다 1 작은값으로 초기화
let isPrime = true; // while문에 사용할 조건값을 true로 초기화

while(isPrime) { // 소수일때 반복
    if(i === 1){ // 인자가 1이면 나눠지니 미리 반복문 탈출
        break;
    }
    if(num % i-- === 0) { // num을 i로 나눈 나머지가 0이면 isPrime을 false로 설정
        isPrime = !isPrime;
    }
}

document.write((isPrime) ? "소수입니다" : "소수가 아닙니다"); // isprime 값에 맞게 출력