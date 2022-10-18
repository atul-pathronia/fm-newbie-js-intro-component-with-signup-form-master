"use strict";

const submitBtn = document.querySelector(".submitBtn");
const inputText = document.querySelectorAll("input");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  inputText.forEach((input) => {
    if (input.name === "fname" && !input.value) {
      const errorText = document.createElement("span");
      errorText.textContent = "fisrt Name cannot be empty";
      const errorImg = document.createElement("img");
      errorImg.src = "/images/icon-error.svg";
      input.after(errorText, errorImg);
      input.style.borderColor = "#ff7a7a";
    }
    if (input.name === "lname" && !input.value) {
      const errorText = document.createElement("span");
      errorText.textContent = "Last Name cannot be empty";
      const errorImg = document.createElement("img");
      errorImg.src = "/images/icon-error.svg";
      input.after(errorText, errorImg);
      input.style.borderColor = "#ff7a7a";
    }
    if (input.name === "email" && !input.value) {
      const errorText = document.createElement("span");
      errorText.textContent = "Email cannot be empty";
      const errorImg = document.createElement("img");
      errorImg.src = "/images/icon-error.svg";
      input.after(errorText, errorImg);
      input.style.borderColor = "#ff7a7a";
    } else if (input.name === "email" && !input.value.includes("@")) {
      const errorText = document.createElement("span");
      errorText.textContent = "Looks like this is not an email";
      const errorImg = document.createElement("img");
      errorImg.src = "/images/icon-error.svg";
      input.after(errorText, errorImg);
      input.value = "";
      input.placeholder = "email@example.com";
      input.style.borderColor = "#ff7a7a";
    }
    if (input.name === "password" && !input.value) {
      const errorText = document.createElement("span");
      errorText.textContent = "Password cannot be empty";
      const errorImg = document.createElement("img");
      errorImg.src = "/images/icon-error.svg";
      input.after(errorText, errorImg);
      input.style.borderColor = "#ff7a7a";
    }
  });
});
