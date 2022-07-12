const counterEl =  document.querySelector(`#counter`)
const decrementBtnEl = counterEl.querySelector(`[data-action="decrement"]`)
const incrementBtnEl = counterEl.querySelector(`[data-action="increment"]`)
const valueEl = counterEl.querySelector(`#value`)
let counterValue = 0

decrementBtnEl.addEventListener("click", () => {
    valueEl.textContent = --counterValue 
})

incrementBtnEl.addEventListener("click", () => {
    valueEl.textContent = ++counterValue 
})