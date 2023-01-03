import { getMovies } from "./getMovies.js";

export async function renderMovies() {
  const allMovies = await getMovies();
  const categoryHeading = document.querySelector(".movies-h2");
  const comedyCategory = document.querySelectorAll(".comedy-category");
  const actionCategory = document.querySelectorAll(".action-category");
  const dramaCategory = document.querySelectorAll(".drama-category");
  const categoryItem = document.querySelectorAll(".movies-list-item");
  const showAllMovies = document.querySelectorAll(".show-all-movies");
  const ul = document.querySelector(".movies-list");

  showAllMovies.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      ul.innerHTML = "";
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
      }
    });
  });
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
        }
      }
    });
  });
}
renderMovies();

/*export async function movieCategory() {
  const allMovies = await getMovies();
  const categoryHeading = document.querySelector(".movies-h2");
  const comedyCategory = document.querySelector(".comedy-category");
  const actionCategory = document.querySelector(".action-category");
  const dramaCategory = document.querySelector(".drama-category");
  let categoryItem = document.querySelectorAll(".movies-list-item");

  comedyCategory.addEventListener("click", () => {
    categoryHeading.innerHTML = "Komedi";

    for (let i = 0; i < categoryItem.length; i++) {
      if (
        categoryItem[i].classList.contains("Action") ||
        categoryItem[i].classList.contains("Drama")
      ) {
        categoryItem[i].classList.add("hidden");
      } else {
        categoryItem[i].classList.remove("hidden");
      }
    }
  });

  actionCategory.addEventListener("click", () => {
    categoryHeading.innerHTML = "Action";
    for (let i = 0; i < categoryItem.length; i++) {
      if (
        categoryItem[i].classList.contains("Komedi") ||
        categoryItem[i].classList.contains("Drama")
      ) {
        categoryItem[i].classList.add("hidden");
      } else {
        categoryItem[i].classList.remove("hidden");
      }
    }
  });
  dramaCategory.addEventListener("click", () => {
    categoryHeading.innerHTML = "Drama";
    for (let i = 0; i < categoryItem.length; i++) {
      if (
        categoryItem[i].classList.contains("Action") ||
        categoryItem[i].classList.contains("Komedi")
      ) {
        categoryItem[i].classList.add("hidden");
      } else {
        categoryItem[i].classList.remove("hidden");
      }
    }
  });
}

movieCategory();*/
