const arr = [1, 3, 4, 6, 8, 11, 12, 23, 34];
// 반복문 for로 배열에서 10보다 큰 값 출력하기
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 10) {
        document.write(`${arr[i]}, `);
    }
}
document.write(`<hr>`);
// 반복문 forEach로 배열에서 10보다 큰 값 출력하기
arr.forEach(function(arr) {
    if(arr > 10) {
        document.write(`${arr}, `);
    }
})
document.write(`<hr>`);
// 반복문 for..of로 배열에서 10보다 큰 값 출력하기
for(num of arr) {
    if(num > 10) {
        document.write(`${num}, `);
    }
}