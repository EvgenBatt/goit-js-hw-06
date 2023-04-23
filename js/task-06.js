const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const inputLength = event.target.value.length;
  const requiredLength = Number.parseInt(event.target.getAttribute("data-length"));

  if (inputLength === requiredLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});
