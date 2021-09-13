const hamburgerMenu = document.querySelector(".menu__hamburger");

const menuElement = document.querySelector(".menu-fixed");

const exitBtn = document.querySelector(".close-btn");

const body = document.querySelector("body");

// let isOpen = false;

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

// const nextBtn = document.querySelector(".arrow__right");
// const prevBtn = document.querySelector(".arrow__left");
// const currentPicture = document.querySelector(".active");

// nextBtn.addEventListener("click", () => {
//   console.log("next button added!");
// });

// prevBtn.addEventListener("click", () => {
//   console.log("previous button added!");
// });

// nextBtn.addEventListener("click", showNextPicture);

// function showNextPicture() {
//   if (currentPicture.classList.contains("active")) {
//     currentPicture.classList.remove("active");
//     currentPicture.nextElementSibling.classList.add("active");
//   }
// }

// prevBtn.addEventListener("click", showPrevPicture);

// function showPrevPicture() {
//   if (currentPicture.classList.contains("active")) {
//     currentPicture.classList.remove("active");
//     currentPicture.previousElementSibling.classList.add("active");
//   }
// }

document.querySelector(".image").classList.add("active");

document.querySelector(".arrow__right").addEventListener("click", () => {
  const currentActive = document.querySelector(".active");
  currentActive.classList.remove("active");
  currentActive.nextElementSibling.classList.add("active");
});
