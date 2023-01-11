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
  } else if (
    location.pathname === "/events.html" ||
    location.pathname === "/Uppgift2-Biograf/events.html"
  ) {
    document.querySelector("#events-id").style.textDecoration = "underline";
  } else if ( 
    location.pathname === "/salonA.html" ||
    location.pathname === "/Uppgift2-Biograf/salonA.html"
  ) {
    document.querySelector("#salon-A").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salonB.html" ||
    location.pathname === "/Uppgift2-Biograf/salonB.html"
  ) {
    document.querySelector("#salon-B").style.textDecoration = "underline";
  }
}