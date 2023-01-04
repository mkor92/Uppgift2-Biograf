export function movieInfo() {
  const movieOption = document.querySelectorAll(".movies-list-item");

  for (let i = 0; i < movieOption.length; i++) {
    movieOption[i].addEventListener("click", openMovieInfo, true);
  }
  function openMovieInfo(event) {
    event.preventDefault();
    window.open("movie-info.html");
  }
}
