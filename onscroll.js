const headerH = document.getElementById("headerH");
const titre = document.getElementById("titre-for-scroll");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currentScrollTop = pageYOffset;

  if (currentScrollTop > lastScrollTop) {
    headerH.classList = "";
    titre.style.marginTop = "2rem";
  } else {
    headerH.classList = "header-scroll-up";
    titre.style.marginTop = "97px";
  }

  lastScrollTop = currentScrollTop;

  if (pageYOffset <= 0) {
    headerH.classList = "";
    titre.style.marginTop = "2rem";
  }
});
