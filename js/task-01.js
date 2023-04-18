const ulCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent}\nElements: ${
      element.lastElementChild.querySelectorAll("li").length
    }`
  );
});
