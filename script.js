function author () {
  alert("Becky Liu and Joshua Wu\nFrom Citadel High School")
}

function about () {
  alert("2 days Hackathon project\nhttps://harbourhacks.com/")
}

document.addEventListener("scroll", function(){
  const animatedText = document.querySelector(".appearAnimation1")
  const rect = animatedText.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText.classList.add("in-view");
  }
  else {
    animatedText.classList.remove("in-view");    
  }
});

document.addEventListener("scroll", function(){
  const animatedText = document.querySelector(".appearAnimation2")
  const rect = animatedText.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText.classList.add("in-view");
  }
  else {
    animatedText.classList.remove("in-view");    
  }
});

document.addEventListener("scroll", function(){
  const animatedText = document.querySelector(".appearAnimation3")
  const rect = animatedText.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText.classList.add("in-view");
  }
  else {
    animatedText.classList.remove("in-view");    
  }
});

document.addEventListener("scroll", function(){
  const animatedText = document.querySelector(".appearAnimation4")
  const rect = animatedText.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText.classList.add("in-view");
  }
  else {
    animatedText.classList.remove("in-view");    
  }
});

document.addEventListener("scroll", function(){
  const animatedText = document.querySelector(".appearAnimation5")
  const rect = animatedText.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText.classList.add("in-view");
  }
  else {
    animatedText.classList.remove("in-view");    
  }
});
