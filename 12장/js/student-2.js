let xhr = new XMLHttpRequest();
xhr.open("GET","student-2.json");
xhr.send();

const result = document.querySelector("#result");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let students = JSON.parse(xhr.responseText);
        students.forEach(student => {
            result.innerHTML += `
            <h1>${student.name}</h1>
            <ul>
                <li>전공 : ${student.major}</li>
                <li>학년 : ${student.grade}</li>
            </ul>    
        `;    
        });
        
    }
}
