import { mobileMenu } from "./mobilmenu.js";
import { getMovies } from "./getMovies.js";

mobileMenu();

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

if (
  location.pathname === "/index.html" ||
  location.pathname === "/Uppgift2-Biograf/index.html" ||
  location.pathname === "/Uppgift2-Biograf/restaurant.html" ||
  location.pathname === "/Uppgift2-Biograf/" ||
  location.pathname === "/" ||
  location.pathname === "/restaurant.html"
) {
  (async function () {
    let moviesArray = await getMovies();

    document.querySelector(".todays-date").innerHTML = new Date(Date.now()).toLocaleDateString();

    

    let todaysShows = document.querySelector(".todays-shows");
    todaysShows.innerHTML === "";

    for (let j = 0; j < moviesArray.length; j++) {
      let arrayDate = moviesArray[j].dateTime;

      for (let i = 0; i < arrayDate.length; i++) {
        if (
          new Date(arrayDate[i]).toLocaleDateString() ===
          new Date(Date.now()).toLocaleDateString()
        ) {
          let li = document.createElement("li");
          let aElement = document.createElement("a");

          let movieId = document.createElement("p");
          let movieTitle = document.createElement("p");
          movieTitle.innerHTML = moviesArray[j].title;
          movieId.innerHTML = moviesArray[j].id;

          aElement.value = movieId;
          movieId.style.display = "none";
          todaysShows.appendChild(li);
          li.appendChild(aElement);

          let movieTime = document.createElement("p");
          movieTime.innerHTML = new Date(arrayDate[i]).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
          aElement.appendChild(movieTime);
          aElement.appendChild(movieId);
          aElement.appendChild(movieTitle);

          aElement.setAttribute("href", "#");
          aElement.classList.add("sidebar-links");
        } 
      }
    }
    if (todaysShows.innerHTML === "") {
        
      let li = document.createElement("li");
      let p = document.createElement("p");
      li.innerHTML = "Inga visningar idag";
      todaysShows.appendChild(li);
  }
  })();
}

if (location.pathname === "/restaurant.html" || location.pathname === "/Uppgift2-Biograf/restaurant.html") {
    document.querySelector("#restaurant-id").style.textDecoration = "underline";
}

if (location.pathname === "/movies.html" || location.pathname === "/Uppgift2-Biograf/movies.html") {
   document.querySelector("#movies-id").style.textDecoration = "underline";
}

if (location.pathname === "/salons.html" || location.pathname === "/Uppgift2-Biograf/salons.html") {
  document.querySelector("#salons-id").style.textDecoration = "underline";
}