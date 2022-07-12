function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body")
const changeColorBtn = document.querySelector("button.change-color")
const colorValueEl = document.querySelector("span.color")

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor()
  bodyEl.style.backgroundColor = color
  colorValueEl.textContent = color
})