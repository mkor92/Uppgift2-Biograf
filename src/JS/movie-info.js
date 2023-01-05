export async function movieInfo() {
  const movieOption = document.querySelectorAll(".movies-list-item");
  const description = document.querySelector(".description");

  for (let i = 0; i < movieOption.length; i++) {
    movieOption[i].addEventListener("click", openMovieInfo, false);
  }
  function openMovieInfo(e) {
    e.preventDefault();
    window.open("under-construction.html");
  }
}
