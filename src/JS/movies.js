const url = "src/filmer.json";
const ul = document.querySelector("#movies-list");
const list = document.createDocumentFragment();

async function getMovies() {
  try {
    const response = await fetch(url);
    const movies = await response.json();

    listData(movies);
  } catch (error) {
    console.log(error);
  }
}

function listData(movies) {
  data.map(function (legend) {
    const legendText = `
    <div class="nickname">${legend.nickname}</div> 
    `;
    const item = document.createElement("li");
    item.innerHTML = legendText;
    list.appendChild(item);
  });
  ul.appendChild(list);
}

/*document.querySelector(".movies").textContent = JSON.stringify(json.movies);*/

getMovies();

/*function addMoviesToDom(challenge) {}

async function getMovies() {
  try {
    let res = await fetch("src/filmer.json");

    if (res.status !== 200) {
      setError("Movies not found", "white");
    } else {
      let data = await res.json();
      challenge = data.movies;
    }
  } catch (error) {
    console.log(error);
  }
}
getMovies();*/
