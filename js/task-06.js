const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", () => {
  if (inputEl.value.length < inputEl.getAttribute("data-length")) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});
