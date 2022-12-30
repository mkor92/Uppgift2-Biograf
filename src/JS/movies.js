async function getJSON() {
  const response = await fetch("src/filmer.json");
  const json = await response.json();
  console.log(json);
}

getJSON();

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
