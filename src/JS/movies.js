import { getMovies } from "./getMovies.js";

async function renderMovies() {
  const allMovies = await getMovies();
  for (let i = 0; i < allMovies.length; i++) {
    const ul = document.querySelector(".movies-list");
    const li = document.createElement("li");
    li.classList.add("movies-list-item");

    li.innerHTML += `<img src= "${allMovies[i].image[0]}" alt="movie image" id="${allMovies[i].id}" />`;
    ul.appendChild(li);
  }
}
renderMovies();
