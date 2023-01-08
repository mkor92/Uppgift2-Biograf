export default function checkLocationForStyle() {
  if (
    location.pathname === "/restaurant.html" ||
    location.pathname === "/Uppgift2-Biograf/restaurant.html"
  ) {
    document.querySelector("#restaurant-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/movies.html" ||
    location.pathname === "/Uppgift2-Biograf/movies.html"
  ) {
    document.querySelector("#movies-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salons.html" ||
    location.pathname === "/Uppgift2-Biograf/salons.html"
  ) {
    document.querySelector("#salons-id").style.textDecoration = "underline";
  } 
}
