import { mobileMenu } from "./mobilmenu.js";
import { getMovies } from "./getMovies.js";

mobileMenu();

(async function () {
  let moviesArray = await getMovies();

  moviesArray
    .filter((movie) => movie.category === "Komedi")
    .slice(0, 3)
    .forEach((item) => {
      let movieItem = document.createElement("li");
      let movieImg = document.createElement("img");
      movieImg.src = item.image[0];
      movieItem.classList.add("movies-list-item");
      document.querySelector(".comedy-start-list").appendChild(movieItem);
      movieItem.appendChild(movieImg);
    });

  moviesArray
    .filter((movie) => movie.category === "Action")
    .slice(0, 3)
    .forEach((item) => {
      let movieItem = document.createElement("li");
      let movieImg = document.createElement("img");
      movieImg.src = item.image[0];
      movieItem.classList.add("movies-list-item");
      document.querySelector(".action-start-list").appendChild(movieItem);
      movieItem.appendChild(movieImg);
    });

  moviesArray
    .filter((movie) => movie.category === "Drama")
    .slice(0, 3)
    .forEach((item) => {
      let movieItem = document.createElement("li");
      let movieImg = document.createElement("img");
      movieImg.src = item.image[0];
      movieItem.classList.add("movies-list-item");
      document.querySelector(".drama-start-list").appendChild(movieItem);
      movieItem.appendChild(movieImg);
    });
})();
