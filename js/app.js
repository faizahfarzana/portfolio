/*
 * Randomize cover photo on each reload
 */

var home = document.getElementById("home");
var bgImg = 8;
const randomIndex = getRandomIndex();
var value =
  "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/banner/banner" +
  randomIndex +
  ".jpg')";
home.style.backgroundImage = value;
console.log("index: " + randomIndex);
console.log("image path: " + value);

function getRandomIndex() {
  return Math.ceil(Math.random() * bgImg);
}

/*
 * Change my photo every 2 secs
 */

var myPhoto = document.getElementById("myPhoto");
var myPhotos = 3;
setInterval(function () {
  if ((myPhotos == 0)) {
    myPhotos = 3;
  }
  value = "images/me/me" + myPhotos + ".jpg"
  myPhoto.src = value;
  console.log("index: " + myPhotos);
  console.log("image path: " + value);
  myPhotos--;
}, 2000);

/*
 * Set section to active
 */

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});