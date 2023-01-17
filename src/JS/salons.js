import { getMovies } from "./getMovies.js";

function renderFilter(result) {
  let list = document.querySelector(".salon-movielist");

  result.forEach((item) => {
    let liElement = document.createElement("li");
    let movieImg = document.createElement("img");
    movieImg.src = item.image[0];
    movieImg.id = item.id;
    movieImg.alt = "Movie poster";
    list.appendChild(liElement);
    liElement.append(movieImg);
  });
}

async function filterSalonMovies() {
  const allMovies = await getMovies();

  if (
    location.pathname === "/salonA.html" ||
    location.pathname === "/Uppgift2-Biograf/salonA.html"
  ) {
    const resultSalonA = allMovies.filter((movie) => movie.salon === "A");
    renderFilter(resultSalonA);
  } else if (
    location.pathname === "/salonB.html" ||
    location.pathname === "/Uppgift2-Biograf/salonB.html"
  ) {
    const resultSalonB = allMovies.filter((movie) => movie.salon === "B");
    renderFilter(resultSalonB);
  }
}

filterSalonMovies();
