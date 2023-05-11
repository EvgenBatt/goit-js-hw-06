const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");

const liIngredients = ingredients.reduce((acc, ingredient) => {
  return acc += `<li class="item">${ingredient}</li>`;
}, "");

ingredientsList.insertAdjacentHTML("afterbegin", liIngredients);
