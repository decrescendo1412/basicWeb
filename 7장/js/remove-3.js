const spans = document.querySelectorAll("p>span");

for(let span of spans) {
    span.addEventListener("click", function() {
        this.parentNode.remove();
    });
}