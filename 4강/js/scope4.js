const factor = 5;   // 변수 선언 및 생성.

function calc() {
    return num * factor;    // 오류 발생
}

{
    const num = 10; // const를 사용해 만든 변수 num은 지역변수이기 때문에 블럭내에서만 사용가능
    let result = calc();    // 함수 호출
    console.log(`result : ${result}`);
}