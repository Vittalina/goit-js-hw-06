const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const listEl = document.createElement("li");
// listEl.classList.add("item");
// listEl.textContent = "Potatoes";
// console.log(listEl);

// const ulIngredients = document.querySelector("#ingredients");
// ulIngredients.appendChild(listEl);

const ulIngredients = [];
for (const el of ingredients) {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = el;
    ulIngredients.push(listEl);
    console.log(ulIngredients);
  }

  const ulList = document.querySelector("#ingredients");
  ulList.append(...ulIngredients);
