document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.getElementById("imageContainer");
  var imgElements = imageContainer.querySelectorAll("img");

  var imageList = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    "img/14.jpg",
    "img/15.jpg",
    "img/16.jpg",
    "img/17.jpg",
    "img/18.jpg",
    "img/19.jpg",
    "img/20.jpg",
    "img/21.jpg",
    "img/22.jpg",
    "img/23.jpg",
    "img/24.jpg",
    "img/25.jpg",
    "img/26.jpg",
    "img/27.jpg",
    "img/28.jpg",
    "img/29.jpg",
    "img/30.jpg"
  ];

  function showRandomImage() {
    var randomIndex = Math.floor(Math.random() * imageList.length);
    
    for (var i = 0; i < imgElements.length; i++) {
      imgElements[i].src = imageList[(randomIndex + i) % imageList.length];
    }
  }
  
  showRandomImage();
});
