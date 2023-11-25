const url = "https://reqres.in/api/products/10";
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();

const result = document.querySelector("#result");

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let info = JSON.parse(xhr.responseText);
        result.innerHTML = `
            상품명 : ${info.data.name}<br>
            생산년도 : ${info.data.year}
        `;
    }
}