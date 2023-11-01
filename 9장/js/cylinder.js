// // 생성자 함수 만들기
// function Cylinder(diameter, height) {
//     this.diameter = diameter;
//     this.height = height;
    
//     // 부피 계산 메서드
//     this.volume = function() {
//         const radius = this.diameter / 2;
//         return (radius * radius * Math.PI * this.height).toFixed(2);
//     }
// }
// 클래스 만들기
class Cylinder {
    constructor(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
    volume() {
        const radius = this.diameter / 2;
        return (radius * radius * Math.PI * this.height).toFixed(2);
    }
}
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const diameter = document.querySelector("#cyl-diameter").value;
    const height = document.querySelector("#cyl-height").value;

    if(diameter === "" && height === "") {
        result.innerText = '지름, 높이 값을 모두 입력하세요.';
    }
    else {
        let cylinder = new Cylinder(parseInt(diameter), parseInt(height));
        result.innerText = `부피는 ${cylinder.volume()}이다.`;
    }
})