"use strict";

const emailInput = document.getElementById("email");
const submitInput = document.getElementById("submit");

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
