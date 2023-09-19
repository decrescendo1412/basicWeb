const student = {
    major : "컴퓨터공학부",
    idNum : 202095088,
    name : "정호준"    
}

for(key in student) {
    document.write(`${key} : ${student[key]}<br>`)
}