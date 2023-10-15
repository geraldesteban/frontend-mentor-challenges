"use strict";
const navUl = document.querySelector(".navbar-ul");
const iconNavOpen = document.querySelector(".navbar-open");
const iconNavClose = document.querySelector(".navbar-close");

// Navigation bar mobile
const openNav = function () {
  navUl.classList.remove("laptop:hidden");
  iconNavOpen.classList.remove("laptop:block");
  iconNavClose.classList.remove("hidden");
};

const closeNav = function () {
  navUl.classList.add("laptop:hidden");
  iconNavOpen.classList.add("laptop:block");
  iconNavClose.classList.add("hidden");
};

iconNavOpen.addEventListener("click", openNav);
iconNavClose.addEventListener("click", closeNav);
