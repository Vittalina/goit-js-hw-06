// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const ulCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategories.length}`);

// const liItemTitle = document.querySelector("h2");
// console.log(`Category: ${liItemTitle.textContent}`);

for (const item of ulCategories) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const liItems = item.querySelectorAll("li");
    console.log(`Elements: ${liItems.length}`);
}