function sayHello() {
    alert('Hello, welcome to my website!');
}

function dontclick() {
    alert('I told you la still click!');
}

window.addEventListener('scroll', () => {
  let scrollRatio = window.scrollY / document.body.scrollHeight;
  document.body.style.background = `linear-gradient(to bottom, #6eb5ff, ${scrollRatio > 0.5 ? '#4a83d3' : '#2a64b4'}, #093c81)`;
});
