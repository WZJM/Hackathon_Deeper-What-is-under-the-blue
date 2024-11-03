function sayHello() {
  alert('Hello, welcome to my website!');
}

function dontclick() {
  alert('I told you la still click!');
}

function author () {
  alert("Becky Liu and Joshua Wu\nFrom Citadel High School")
}

function about () {
  alert("2 days Hackathon project")
}

document.addEventListener("scroll", function () {
  const slidePopImage = document.querySelector(".slide-pop-image");
  const rect = slidePopImage.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
      slidePopImage.classList.add("slide-pop-image"); // Trigger the animation
  }
});