const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// const firstCh = string[0].toUpperCase();
// const reaminStr = string.slice(1);
// const result = firstCh + reaminStr;
// document.write(result);

const result1 = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result1);