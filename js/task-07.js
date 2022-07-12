const sliderEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("#text");

sliderEl.addEventListener("input", () => {
  spanEl.style.fontSize = sliderEl.value + "px";
});
