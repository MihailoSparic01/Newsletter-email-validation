"use strict";

const emailInput = document.getElementById("email");
const submitInput = document.getElementById("submit");
const newsletterEl = document.getElementById("newsletter");
const successMessageEl = document.getElementById("success__message");
const dismissBtn = document.getElementById("dismiss");

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
  } else {
    submitInput.classList.add("btn-valid");
    emailInput.classList.remove("email-invalid");
  }
});

submitInput.addEventListener("click", function (e) {
  e.preventDefault();
  if (submitInput.classList.contains("btn-valid")) {
    newsletterEl.classList.add("displaynone");
    successMessageEl.classList.add("displayblock");
    console.log("t");
  }
});

dismissBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target === this) {
    newsletterEl.classList.remove("displaynone");
    successMessageEl.classList.remove("displayblock");
    emailInput.value = "";
  }
});
