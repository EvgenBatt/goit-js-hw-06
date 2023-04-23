function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = controlsDiv.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

const createBoxes = (amount) => {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(box);
    size += 10;
  }
};

const destroyBoxes = () => {
  boxesDiv.innerHTML = "";
};
