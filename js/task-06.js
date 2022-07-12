const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", () => {
  if (inputEl.value.length < inputEl.getAttribute("data-length")) {
    inputEl.classList.remove("valid");
    inputEl.classList.toggle("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.toggle("valid");
  }
});
