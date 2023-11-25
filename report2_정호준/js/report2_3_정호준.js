// 이름, 학번, 점수 요소 가져오기
const username = document.querySelector("#username");
const userid = document.querySelector("#userid");
const score = document.querySelector("#score");
// 버튼 요소 가져오기
const button = document.querySelector("#container button");
// thead 요소 가져오기
const thead = document.querySelector("thead");
button.addEventListener("click", (e) => {
    e.preventDefault();
    // 요소가 입력안되면 알람 (취소하는방법 모르겠습니다)
    if(!username.value || !userid.value || !score.value) {
        alert("모든 내용을 입력해 주세요");
    } else if (!(score.value <= 100 && score.value >= 0)) {
        alert("잘못된 점수 입니다.")
    } else {
        // 학점 계산
        let grade;
        if(score.value <= 100 && score.value >= 90) {
            grade = "A학점";
        } else if (score.value <= 89 && score.value >= 80) {
            grade = "B학점";
        } else if (score.value <= 79 && score.value >= 70) {
            grade = "C학점";
        } else if (score.value <= 69 && score.value >= 60) {
            grade = "D학점";
        } else if (score.value <= 59 && score.value >= 0) {
            grade = "F학점";
        }
        // tr 요소 생성
        let newTr = document.createElement("tr");
        // td 요소 생성후 값 입력
        let newName = document.createElement("td");
        newName.innerText = username.value;
        let newId = document.createElement("td");
        newId.innerText = userid.value;
        let newScore = document.createElement("td");
        newScore.innerText = score.value;
        let newGrade = document.createElement("td");
        newGrade.innerText = grade;
        // tr의 자식으로 td 추가
        newTr.appendChild(newName);
        newTr.appendChild(newId);
        newTr.appendChild(newScore);
        newTr.appendChild(newGrade);
        thead.appendChild(newTr);
        // 입력값 초기화
        username.value = '';
        userid.value = '';
        score.value = '';
    }
});
