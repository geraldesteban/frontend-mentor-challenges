"use strict";
const navUl = document.querySelector(".navbar-ul");
const navOpen = document.querySelector(".navbar-open");
const navClose = document.querySelector(".navbar-close");

// Navigation bar mobile
navOpen.addEventListener("click", function () {
  navUl.classList.remove("laptop:hidden");
  navUl.classList.remove("flex");
  navUl.classList.add("block");
  navOpen.classList.remove("laptop:block");
  navClose.classList.remove("hidden");
});

navClose.addEventListener("click", function () {
  navOpen.classList.add("laptop:block");
  navClose.classList.add("hidden");
  navUl.classList.add("laptop:hidden");
});
