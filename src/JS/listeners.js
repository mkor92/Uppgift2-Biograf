// Navigation menu button listener

export default function listenerMenuBtn() {
    let navMenu = document.querySelector(".mobile-nav-menu");
  
    navMenu.addEventListener("click", () => {
      let navSpan = document.querySelector(".mobile-nav-menu span");
      let navContainer = document.querySelector("#nav-box");
  
      if (navContainer.style.display === "none") {
        navContainer.style.display = "block";
        navSpan.innerHTML = "&#9652;";
      } else {
  
        navContainer.style.display = "none";
        navSpan.classList.remove(".arrow-top");
        navSpan.innerHTML = "&#9662;";
      }
    });
  }