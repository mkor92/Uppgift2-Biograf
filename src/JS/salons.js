import { getMovies } from "./getMovies.js";

function renderFilter(result) {
    let list = document.querySelector(".salon-movielist");
    console.log("Hey")
    result.forEach((item) => {
        let liElement = document.createElement("li");
        let movieImg = document.createElement("img");
        movieImg.src = item.image[0];
        console.log("Hello");
        list.appendChild(liElement);
        liElement.append(movieImg);
    })
    
    //li.innerHTML += `<img src= "${allMovies[i].image[0]}" alt="movie image" id="${allMovies[i].id}" />`;
    
}

async function filterSalonMovies () {
    const allMovies = await getMovies();


    if (location.pathname === "/salonA.html" || location.pathname === "/Uppgift2-Biograf/salonA.html") {
    const resultSalonA = allMovies.filter(movie => movie.salon === "A" );
    renderFilter(resultSalonA);
    console.log(resultSalonA); }
    else if (location.pathname === "/salonB.html" || location.pathname === "/Uppgift2-Biograf/salonB.html"){
    const resultSalonB = allMovies.filter(movie => movie.salon === "B" );
    renderFilter(resultSalonB);
    console.log(resultSalonB);
    }
    
    }


    filterSalonMovies();