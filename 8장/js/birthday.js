let begin = new Date("2001-03-30");
let today = new Date("2023-10-31");

let birth = Math.round((today.getTime() - begin.getTime())/(1000*60*60*24));

const date = document.querySelector("#result");
date.innerText = birth;