const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const defaultName = nameOutput.textContent;

nameInput.addEventListener("input", () => {
  const nameText = nameInput.value;

  if (nameText === "") {
    nameOutput.textContent = defaultName;
  } else {
    nameOutput.textContent = nameText;
  }
});
