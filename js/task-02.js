const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = ingredients.map((item) => {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  liItem.classList.toggle("item");
  return liItem;
});

document.querySelector("ul#ingredients").append(...list);
