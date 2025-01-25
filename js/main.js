const hamburgerButton = document.getElementById("hamburger");
const menu = document.querySelector(".header__nav--menu");
const navItems = document.querySelectorAll(".header__nav--item");

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
