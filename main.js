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

const nextBtn = document.querySelector(".arrow__right");

const prevBtn = document.querySelector(".arrow__left");

const images = document.querySelector(".banner__imgBg").children;

const slides = document.querySelector(".slide").children;

const totalImages = images.length;

const totalSlides = slides.length;

let index = 0;

prevBtn.addEventListener("click", () => {
  nextImage("next");
});

nextBtn.addEventListener("click", () => {
  nextImage("prev");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages && index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1 && totalSlides - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[index].classList.add("active");

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("visible");
  }
  slides[index].classList.add("visible");
}

// nextBtn.addEventListener("click", () => {
//   const currentActive = document.querySelector(".active");
//   currentActive.classList.remove("active");
//   currentActive.nextElementSibling.classList.add("active");
// });
