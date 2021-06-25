var home = document.getElementById('home');
var images = 8;
const randomIndex = getRandomIndex();
home.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../images/banner/banner" + randomIndex + ".jpg')";
console.log(randomIndex);
console.log(value);

function getRandomIndex() {
  return Math.ceil(Math.random() * images);
}