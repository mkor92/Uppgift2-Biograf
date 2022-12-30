// -------------------- MOBILE MENU --------------------
export function mobileMenu() {
  let backDrop = document.querySelector(".header-nav");
  let navToggle = document.querySelectorAll(".header-nav-toggle");

  navToggle.forEach((hamburger) => {
    hamburger.addEventListener("click", () => {
      backDrop.classList.toggle("open");
      function closeMobileMenu() {
        window.onclick = function (event) {
          if (event.target == backDrop) {
            backDrop.classList.remove("open");
          }
        };
      }

      backDrop.addEventListener("click", closeMobileMenu);
    });
  });
}
