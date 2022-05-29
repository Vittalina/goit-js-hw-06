function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBgColor);

function changeBgColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}