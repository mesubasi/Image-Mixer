function getRandomUnsplashUrl() {
    return "https://source.unsplash.com/random/300x300?rn/" + Math.floor(Math.random() * 1000);
}

var imgElements = document.getElementsByTagName("img");
for (var i = 0; i < imgElements.length; i++) {
    imgElements[i].src = getRandomUnsplashUrl();
}