// 캐러셀 영역 가져오기
const img = document.querySelector("img");
// 이미지 배열
const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];

let i = 0; // 배열 인덱스

img.addEventListener("mouseover", () => {
    i++;
    if (i >= pics.length) i = 0;
    img.src = `images/${pics[i]}`;
});