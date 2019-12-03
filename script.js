//Make the menu appear on clicking the burger
const bruger = document.querySelector(".burger-menu");
const header = document.getElementById("headerH");
const mobileMenu = document.getElementById("mobile-menu");
const mainBlock = document.getElementById("mainM");
const footer = document.getElementById("footerF");

bruger.addEventListener("click", () => {
  mobileMenu.classList.toggle("nodisplay");
  bruger.classList.toggle("rotate");
  header.classList.toggle("full-screen");
  mobileMenu.classList.toggle("slide-in");
  mainBlock.classList.toggle("no");
  footer.classList.toggle("no");
});

//Change the bottom color of the inputs
const errorMessage = el => {
  el.setCustomValidity("Запольните пожалуйста эту ячейку");
  el.style.borderBottom = "1px solid red";
};

const typing = el => {
  el.setCustomValidity("");
  el.style.borderBottom = "";
};
