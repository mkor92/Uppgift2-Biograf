import { getMovies } from "./getMovies.js";

export default function moviesOnStartpage() {
if (
    location.pathname === "/Uppgift2-Biograf/" ||
    location.pathname === "/Uppgift2-Biograf/index.html" ||
    location.pathname === "/index.html" ||
    location.pathname === "/"
  ) {
    (async function () {
      let moviesArray = await getMovies();
  
      moviesArray
        .filter((movie) => movie.category === "Komedi")
        .slice(0, 3)
        .forEach((item) => {
          let movieItem = document.createElement("li");
          let movieImg = document.createElement("img");
          movieImg.src = item.image[0];
          movieImg.alt = "Movie poster";
          movieImg.id = item.id;
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
          movieImg.alt = "Movie poster";
          movieImg.id = item.id;
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
          movieImg.alt = "Movie poster";
          movieImg.id = item.id;
          document.querySelector(".drama-start-list").appendChild(movieItem);
          movieItem.appendChild(movieImg);
        });
    })();
  }
}