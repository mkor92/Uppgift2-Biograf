import { getMovies } from "./getMovies.js";
import { movieInfo } from "./movie-info.js";

export async function renderMovies() {
  const allMovies = await getMovies();
  const categoryHeading = document.querySelector(".movies-h2");
  const comedyCategory = document.querySelectorAll(".comedy-category");
  const actionCategory = document.querySelectorAll(".action-category");
  const dramaCategory = document.querySelectorAll(".drama-category");
  const ul = document.querySelector(".movies-list");

  for (let i = 0; i < allMovies.length; i++) {
    categoryHeading.innerHTML = "Alla filmer";
    const li = document.createElement("li");
    const category = allMovies[i].category;
    const textOnImage = document.createElement("p");
    li.classList.add("movies-list-item");
    li.classList.add(category);
    li.innerHTML += `<img src= "${allMovies[i].image[0]}" alt="movie image" id="${allMovies[i].id}" />`;
    textOnImage.innerHTML = `<span>${category}</span>`;
    ul.appendChild(li);
    li.appendChild(textOnImage);
    movieInfo();
  }

  comedyCategory.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      ul.innerHTML = "";
      for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].category == "Komedi") {
          categoryHeading.innerHTML = "Komedi";

          const li = document.createElement("li");
          const category = allMovies[i].category;
          const textOnImage = document.createElement("p");
          li.classList.add("movies-list-item");
          li.classList.add(category);
          li.innerHTML += `<img src= "${allMovies[i].image[0]}" alt="movie image" id="${allMovies[i].id}" />`;
          textOnImage.innerHTML = `<span>${category}</span>`;
          ul.appendChild(li);
          li.appendChild(textOnImage);
          movieInfo();
        }
      }
    });
  });

  actionCategory.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      ul.innerHTML = "";
      for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].category == "Action") {
          categoryHeading.innerHTML = "Action";

          const li = document.createElement("li");
          const category = allMovies[i].category;
          const textOnImage = document.createElement("p");
          li.classList.add("movies-list-item");
          li.classList.add(category);
          li.innerHTML += `<img src= "${allMovies[i].image[0]}" alt="movie image" id="${allMovies[i].id}" />`;
          textOnImage.innerHTML = `<span>${category}</span>`;
          ul.appendChild(li);
          li.appendChild(textOnImage);
          movieInfo();
        }
      }
    });
  });

  dramaCategory.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      ul.innerHTML = "";
      for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].category == "Drama") {
          categoryHeading.innerHTML = "Drama";

          const li = document.createElement("li");
          const category = allMovies[i].category;
          const textOnImage = document.createElement("p");
          li.classList.add("movies-list-item");
          li.classList.add(category);
          li.innerHTML += `<img src= "${allMovies[i].image[0]}" alt="movie image" id="${allMovies[i].id}" />`;
          textOnImage.innerHTML = `<span>${category}</span>`;
          ul.appendChild(li);
          li.appendChild(textOnImage);
          movieInfo();
        }
      }
    });
  });
}
renderMovies();
