"use strict";
const opens = document.getElementById("open");
const closes = document.getElementById("close");
const displays = document.getElementById("display");

function openNav() {
  opens.style.display = "none";
  closes.style.display = "block";
  displays.style.display = "block";
}

function closeNav() {
  const closes = document.getElementById("close");
  opens.style.display = "block";
  closes.style.display = "none";
  displays.style.display = "none";
}
