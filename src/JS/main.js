import { mobileMenu } from "./mobilmenu.js";
import { booking } from "./booking.js";

mobileMenu();
booking();

document.querySelector('.mobile-nav-menu').addEventListener('click', () => {
    console.log("Hello");
    document.querySelector('.nav').style.display = "block";
    document.querySelector('.mobile-nav-menu span').innerHTML = "";
    console.log("Why");
})

