function whatsYourFavorite() {
    let fav = "js";
    return new Promise((resolve, reject) => resolve(fav));
}

function displaySubjecct(subject) {
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}
whatsYourFavorite()
.then(displaySubjecct)
.then(console.log);