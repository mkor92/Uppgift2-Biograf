// Navigation menu button listener

export default function listenerMenuBtn() {
  let navMenu = document.querySelector(".mobile-nav-menu");
  let navList = document.querySelector(".nav");
  if (window.innerWidth < 640) {
    navList.style.display = "none";

    navMenu.addEventListener("click", () => {
      let navSpan = document.querySelector(".mobile-nav-menu span");

      if (navList.style.display === "none") {
        navList.style.display = "block";
        navSpan.classList.remove(".arrow-top");
        navSpan.innerHTML = "&#9662;";
      } else {
        navList.style.display = "none";
        navSpan.innerHTML = "&#9652;";
      }
    });
  }
}
