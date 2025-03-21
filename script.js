"use strict";

const emailInput = document.getElementById("email");
const submitInput = document.getElementById("submit");
const newsletterEl = document.getElementById("newsletter");
const successMessageEl = document.getElementById("success__message");
const dismissBtn = document.getElementById("dismiss");
const invalidEmailText = document.getElementById("email-req");

emailInput.addEventListener("input", function (e) {
  e.preventDefault();
  const beforeAT = emailInput.value.split("@"); // ovo uzima karaktere izmedju @ i stavlja u []
  const indexAt = emailInput.value.indexOf("@");
  const dotIndex = emailInput.value.indexOf(".", indexAt);
  const between = emailInput.value.slice(indexAt + 1, dotIndex);
  const end = emailInput.value.slice(dotIndex + 1);

  if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".") ||
    beforeAT[0].length <= 1 ||
    between.length <= 1 ||
    end.length <= 1
  ) {
    emailInput.classList.add("email-invalid");
    submitInput.classList.remove("btn-valid");
    invalidEmailText.style.display = "inline-block";
  } else {
    submitInput.classList.add("btn-valid");
    emailInput.classList.remove("email-invalid");
    invalidEmailText.style.display = "none";
  }
});

submitInput.addEventListener("click", function (e) {
  e.preventDefault();
  if (submitInput.classList.contains("btn-valid")) {
    newsletterEl.classList.add("displaynone");
    successMessageEl.classList.add("displayblock");
    let succesMessage = (document.querySelector(
      ".success__text"
    ).innerHTML = `A confirmation email has been sent to ${emailInput.value} Please open
        it and click the button inside to confirm your subscription.`);
  }
});

dismissBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target === this) {
    newsletterEl.classList.remove("displaynone");
    successMessageEl.classList.remove("displayblock");
    submitInput.classList.remove("btn-valid");
    emailInput.value = "";
  }
});
