// Navigation menu button listener

export default function listenerMenuBtn() {
  let navMenu = document.querySelector(".mobile-nav-menu");

  navMenu.addEventListener("click", () => {
    let navSpan = document.querySelector(".mobile-nav-menu span");
    let navContainer = document.querySelector(".nav");

    if (navContainer.style.display === "block") {
      navContainer.style.display = "none";
      navSpan.classList.remove(".arrow-top");
      navSpan.innerHTML = "&#9662;";
    } else {
      navContainer.style.display = "block";
      navSpan.innerHTML = "&#9652;";
    }
  });
}
