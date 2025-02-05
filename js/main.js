const hamburgerButton = document.getElementById("hamburger");
const menu = document.querySelector(".header__nav--menu");
const navItems = document.querySelectorAll(".header__nav--item");

const projectItems = document.querySelectorAll(".main__project");
const dots = document.querySelectorAll(".carousel__dot");
const projectContainer = document.querySelector(
  ".main__projects--container-carousel"
);
const leftButton = document.querySelector(".left__button");
const rightButton = document.querySelector(".right__button");
let currentIndex = 0;
let startX, currentX, differenceX;

const toggleShow = () => {
  menu.classList.toggle("show");
};

const removeShow = () => {
  menu.classList.remove("show");
};

hamburgerButton.addEventListener("click", toggleShow);
navItems.forEach((navItem) => {
  navItem.addEventListener("click", removeShow);
});

const updateCarousel = () => {
  projectContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

leftButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : projectItems.length - 1;
  updateCarousel();
});

rightButton.addEventListener("click", () => {
  currentIndex = currentIndex < projectItems.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

// Touch events for sliding functionality
projectContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

projectContainer.addEventListener("touchmove", (e) => {
  currentX = e.touches[0].clientX;
  differenceX = currentX - startX;
});

projectContainer.addEventListener("touchend", () => {
  if (differenceX > 50) {
    // swipe right action
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : projectItems.length - 1;
  } else if (differenceX < -50) {
    // swipe left action
    currentIndex =
      currentIndex < projectItems.length - 1 ? currentIndex + 1 : 0;
  }
  updateCarousel();
  differenceX = 0;
});

updateCarousel();
