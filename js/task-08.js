const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.elements.email;
  const passwordValue = form.elements.password;

  if (emailValue.value === "" || passwordValue.value === "") {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  const formValue = {
    email: emailValue.value,
    password: passwordValue.value,
  };

  console.log(formValue);
  form.reset();
});
