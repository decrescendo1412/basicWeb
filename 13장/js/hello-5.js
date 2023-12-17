async function whatsYourFavorite() {
    let fav = "js";
    return fav;
}

async function displaySubjecct(subject) {
    return `Hello, ${subject}`;
}

async function init() {
    const response = await whatsYourFavorite();
    const result = await displaySubjecct(response);
    console.log(result);
}

init();