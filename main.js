const hamburgerMenu = document.querySelector(".menu__hamburger");

const menuElement = document.querySelector(".menu-fixed");

const exitBtn = document.querySelector(".close-btn");

const body = document.querySelector("body");

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

document.querySelector(".image").classList.add("active");

const nextBtn = document.querySelector(".arrow__arearight");

const prevBtn = document.querySelector(".arrow__arealeft");

const images = document.querySelector(".banner__imgBg").children;

const slides = document.querySelector(".slide").children;

const totalImages = images.length;

const totalSlides = slides.length;

let index = 0;

prevBtn.addEventListener("click", () => {
  nextImage("prev");
});

nextBtn.addEventListener("click", () => {
  nextImage("next");
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
