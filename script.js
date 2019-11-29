const bruger = document.querySelector(".burger-menu");
const body = document.getElementById("motherland");
const mobileMenu = document.getElementById("mobile-menu");

bruger.addEventListener("click", () => {
  bruger.classList.toggle("rotate");
  body.classList.toggle("no-overflow");
  mobileMenu.classList.toggle("nodisplay");
});
