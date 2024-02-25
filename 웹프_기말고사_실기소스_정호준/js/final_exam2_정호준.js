// 배열생성
const fruits = ["apple", "banana", "orange", "grape"];
// html 구성요소 가져오기
const list = document.querySelector("#list");
const result = document.querySelector("#result");
// 길이 배열 생성
let len = [];
// 길이 배열 값
fruits.forEach(fruit => {
    len.push(fruit.length);
})
list.innerText = fruits;
result.innerText = len;