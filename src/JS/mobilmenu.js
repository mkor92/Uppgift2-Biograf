// -------------------- MOBILE MENU --------------------
export function mobileMenu() {
  const navToggle = document.querySelector(".header-nav-toggle");
  const backDrop = document.querySelector(".header-nav");

  navToggle.addEventListener("click", () => {
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
}
