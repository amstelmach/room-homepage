const hamburgerMenu = document.querySelector(".hamburger-menu");

const menuElement = document.querySelector(".menu");

const exitBtn = document.querySelector(".close-btn");

const body = document.querySelector("body");

let isOpen = false;

hamburgerMenu.addEventListener("click", function () {
  menuElement.classList.add("show-menu");
});

exitBtn.addEventListener("click", function () {
  menuElement.classList.remove("show-menu");
});

// body.addEventListener("click", function (event) {
//   if (event.target.classList !== "menu") {
//     menuElement.classList.remove("show-menu");
//   }
// });

document.addEventListener(
  "click",
  function () {
    if (menuElement.classList.contains("show-menu")) {
      menuElement.classList.remove("show-menu");
    }
  },
  true
);
