import { getMovies } from "./getMovies.js";

export function movieInfo() {
  const movieOption = document.querySelectorAll(".movies-list-item");
  const description = document.querySelector(".description");
  const movieImg = document.querySelectorAll(".movies-list-item img");

  for (let i = 0; i < movieOption.length; i++) {
    movieOption[i].addEventListener("click", () => {
      /*openMovieInfo, false);*/
      let movieID = movieImg[i].id 
      console.log(movieID)
      window.open(`movie-info.html?movie-id=${movieID}`);
      
      

  });
}
}

  /*
  function openMovieInfo(e) {
    e.preventDefault();
    window.open("under-construction.html");
  } */

export async function findMovieID() {
  let movieId = Number((location.search).slice(10));
   console.log(movieId);

   const moviesArray = await getMovies();

  const filterdMovie = moviesArray.filter( item => movieId == item.id);
  

  const movie = filterdMovie[0];

  console.log(movie);

  document.querySelector(".bigger-image").src = movie.image[1];
  document.querySelector(".movie-poster-small").src = movie.image[0];
  document.querySelector(".movie-info-title").innerHTML = movie.title.toUpperCase();
  document.querySelector(".category-info").innerHTML = movie.category;
  document.querySelector(".movie-info-description").innerHTML = movie.description;
  let screeningList = document.querySelector(".screening-dates");

  const datesArray = movie.dateTime;

  console.log(datesArray)

 
        for (let i = 0; i < datesArray.length; i++) {
          if (
            new Date(movie.dateTime[i]).toLocaleDateString() >=
            new Date(Date.now()).toLocaleDateString()
          ) {
        let screeningDate = document.createElement("li");
        let bookingBtn = document.createElement("button");
        screeningDate.innerHTML = new Date(movie.dateTime[i]).toLocaleDateString() + " kl " + new Date(movie.dateTime[i]).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        screeningList.appendChild(screeningDate);
        screeningDate.append(bookingBtn);
        bookingBtn.innerHTML = "BILJETTER"
        bookingBtn.classList.add("booking-button");
        screeningDate.classList.add("screening-dates-item");
        
      
        } else {
        let screeningDate = document.createElement("li");
        screeningDate.innerHTML = "Inga visningar just nu"
        screeningList.appendChild(screeningDate);
        screeningDate.classList.add("screening-dates-item");
  }
  }




}

findMovieID();



/* 
      <section class="movie-information sec-cont">
        <div class="images-container">
          <img class="bigger-image" alt="bigger picture of the movie"/>
          <img class="movie-poster-small" alt="movie poster" />
          <h2 class="movie-info-title"></h2>
          <p class="category-info"></p>
        </div>
        
        <p class="movie-info-description"></p>
        <h3 class="screenings">VISNINGSTIDER</h3>
        <ul class="screening-dates"></ul>

        
      </section>
*/