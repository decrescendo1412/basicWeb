// result 가져오기
const result = document.querySelector("#result");
// 객체 생성
let info = {name : "정호준", age : 23, hobby : "게임"};
// 객체 출력
result.innerText = `안녕하세요. ${info.hobby}이 취미인 ${info.age}세 ${info.name}입니다.`;