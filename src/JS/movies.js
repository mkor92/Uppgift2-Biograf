const url = "src/movies.json";
async function getMovies() {
  const response = await fetch(url);
  const data = await response.json();
  const allMovies = data.movies;

  for (let i = 0; i < allMovies.length; i++) {
    const ul = document.querySelector(".movies-list");
    const li = document.createElement("li");
    li.classList.add("movie");

    li.innerHTML += `<img src= "${allMovies[i].image[0]}" alt="movie image" id="${allMovies[i].id}" />`;
    ul.appendChild(li);
  }
}
getMovies();
