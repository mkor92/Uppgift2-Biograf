const movieOption = document.querySelectorAll(".movies-list-item")



movieOption.foreach((option) => {
    option.addEventlistener ("click", (event)  => {
    event.preventDefault();

    window.open("movie-info.html")

})})