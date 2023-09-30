"use strict";
const btnShow = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const show = document.querySelector(".share");
const prof = document.querySelector(".profile");

btnShow.addEventListener("click", function () {
  show.classList.remove("hidden");
  btnShow.style.display = "none";
  btnClose.classList.remove("hidden");
});

btnClose.addEventListener("click", function () {
  show.classList.add("hidden");
  btnShow.style.display = "flex";
  btnClose.classList.add("hidden");
});
