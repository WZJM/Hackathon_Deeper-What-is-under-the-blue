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
/*document.addEventListener("scroll", handleScroll);

function handleScroll() {
    const rect = animatedText.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        animatedText.classList.add("in-view");
        document.removeEventListener("scroll", handleScroll);
    }
}
*/

/*const animatedText1 = document.querySelector(".appearAnimation1")

function handleScroll() {
  const rect = animatedText1.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText1.classList.add("in-view");

    document.removeEventListener("scroll", handleScroll);
  }
}
document.addEventListener("scroll", handleScroll)




const animatedText2 = document.querySelector(".appearAnimation2")

function handleScroll() {
  const rect = animatedText2.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText2.classList.add("in-view");

    document.removeEventListener("scroll", handleScroll);
  }
}
document.addEventListener("scroll", handleScroll)



const animatedText3 = document.querySelector(".appearAnimation3")

function handleScroll() {
  const rect = animatedText3.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  if (rect.top <= windowHeight && rect.bottom >= 0){
    animatedText3.classList.add("in-view");

    document.removeEventListener("scroll", handleScroll);
  }
}

      
document.addEventListener("scroll", handleScroll)

*/