async function getJSON() {
  const response = await fetch("src/movies.json");
  const json = await response.json();
  console.log(json);
}

getJSON();
