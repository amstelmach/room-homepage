const hamburgerMenu = document.querySelector(".hamburger-menu");

const menuElement = document.querySelector(".menu");

const exitBtn = document.querySelector(".close-btn");

hamburgerMenu.addEventListener("click", function () {
  menuElement.classList.add("show-menu");
});

exitBtn.addEventListener("click", function () {
  menuElement.classList.remove("show-menu");
});
