"use strict";

const submitBtn = document.querySelector(".submitBtn");
const inputText = document.querySelectorAll("input");
const firstNameError = document.createElement("span");
const firstNameErrorImg = document.createElement("img");
const lastNameError = document.createElement("span");
const lastNameErrorImg = document.createElement("img");
const emailError = document.createElement("span");
const emailErrorImg = document.createElement("img");
const passwordError = document.createElement("span");
const passwordErrorImg = document.createElement("img");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  inputText.forEach((input) => {
    if (input.name === "fname" && !input.value) {
      firstNameError.textContent = "First Name cannot be empty";
      firstNameErrorImg.src = "/images/icon-error.svg";
      input.after(firstNameError, firstNameErrorImg);
      input.style.borderColor = "#ff7a7a";
    } else if (input.value) {
      const firstName = input.value;
      firstNameError.remove();
      firstNameErrorImg.remove();
      input.style.borderColor = "inherit";
    }
    if (input.name === "lname" && !input.value) {
      lastNameError.textContent = "Last Name cannot be empty";
      emailErrorImg.src = "/images/icon-error.svg";
      input.after(lastNameError, lastNameErrorImg);
      input.style.borderColor = "#ff7a7a";
    } else if (input.value) {
      lastNameError.remove();
      lastNameErrorImg.remove();
      input.style.borderColor = "inherit";
    }
    if (input.name === "email" && !input.value) {
      emailError.textContent = "Email cannot be empty";
      emailErrorImg.src = "/images/icon-error.svg";
      input.after(emailError, emailErrorImg);
      input.style.borderColor = "#ff7a7a";
    } else if (input.name === "email" && !input.value.includes("@")) {
      emailError.textContent = "Looks like this is not an email";
      emailErrorImg.src = "/images/icon-error.svg";
      input.after(emailError, emailErrorImg);
      input.value = "";
      input.placeholder = "email@example.com";
      input.style.borderColor = "#ff7a7a";
    } else if (input.value) {
      emailError.remove();
      emailErrorImg.remove();
      input.style.borderColor = "inherit";
    }
    if (input.name === "password" && !input.value) {
      passwordError.textContent = "Password cannot be empty";
      passwordErrorImg.src = "/images/icon-error.svg";
      input.after(passwordError, passwordErrorImg);
      input.style.borderColor = "#ff7a7a";
    } else if (input.value) {
      passwordError.remove();
      passwordErrorImg.remove();
      input.style.borderColor = "inherit";
    }
  });
});
