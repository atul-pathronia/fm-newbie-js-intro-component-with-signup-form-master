"use strict";

const submitBtn = document.querySelector(".submitBtn");
const inputText = document.querySelectorAll("input");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  inputText.forEach((input) => {
    if (input.name === "fname" && !input.value) {
      const error = document.createElement("span");
      error.textContent = "fisrt Name cannot be empty";
      input.after(error);
    }
    if (input.name === "lname" && !input.value) {
      const error = document.createElement("span");
      error.textContent = "Last Name cannot be empty";
      input.after(error);
    }
    if (input.name === "email" && !input.value) {
      const error = document.createElement("span");
      error.textContent = "Email cannot be empty";
      input.after(error);
    } else if (input.name === "email" && !input.value.includes("@")) {
      const error = document.createElement("span");
      error.textContent = "Looks like this is not an email";
      input.after(error);
      input.value = "";
      input.placeholder = "email@example.com";
    }
    if (input.name === "password" && !input.value) {
      const error = document.createElement("span");
      error.textContent = "Password cannot be empty";
      input.after(error);
    }
  });
});
