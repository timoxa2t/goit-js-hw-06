function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainer = document.querySelector("#boxes");
const controlsEl = document.querySelector("#controls");
const createBoxesBtn = controlsEl.querySelector("button[data-create]");
const destroyBoxesBtn = controlsEl.querySelector("button[data-destroy]");
const amountInputEl = controlsEl.querySelector(`input[type="number"]`);

let boxSize = 30;

function createBoxes(amount) {
  const boxes = [];
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.display = "inline-block";
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }
  console.log(boxes);
  boxContainer.append(...boxes);
}

function addBoxesClickHandler(event) {
  const amount = amountInputEl.value;
  amount > 0 && createBoxes(amount);
}

function destroyBoxesHandler(event) {
  boxContainer.innerHTML = "";
  boxSize = 30;
}

createBoxesBtn.addEventListener("click", addBoxesClickHandler);
destroyBoxesBtn.addEventListener("click", destroyBoxesHandler);
