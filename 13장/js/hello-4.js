async function whatsYourFavorite() {
    let fav = "js";
    return fav;
}

async function displaySubjecct(subject) {
    return `Hello, ${subject}`;
}


whatsYourFavorite()
.then(displaySubjecct)
.then(console.log);