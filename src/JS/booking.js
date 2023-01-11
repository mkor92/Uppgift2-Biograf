const bookingRenderContainer = document.querySelector(
  "#booking-render-container"
);

const saveBookingInfo = () => {
  //placeholders for variables
  let salon = "A"; //e.target.dataset.salon
  let title = "Terminator"; //e.target.datset.title
  let time = "2022-12-29 kl. 20.00"; //e.target.datset.time

  renderBooking(salon, title, time);
};

const renderBooking = (salon, title, time) => {
  let bookingInfoContainer = document.createElement("div");
  bookingInfoContainer.innerHTML = `
        <h2>salong ${salon}</h2>
        <h1>${title}</h1>
        <h3>${time}</h3>
        <h2 class="booking-step-1-start">1. Välj stolar</h2>
        <div class="movie-screen">Bioduk</div>
        <div class="choose-seat-container">
            <div class="seat">1</div>
            <div class="seat">2</div>
            <div class="seat">3</div>
            <div class="seat">4</div>
            <div class="seat">5</div>
            <div class="seat">6</div>
        </div>
        <div class="choose-seat-container">
            <div class="seat">7</div>
            <div class="seat">8</div>
            <div class="seat">9</div>
            <div class="seat">10</div>
            <div class="seat">11</div>
            <div class="seat">12</div>
        </div>
        <div class="choose-seat-container">
            <div class="seat">13</div>
            <div class="seat">14</div>
            <div class="seat">15</div>
            <div class="seat">16</div>
            <div class="seat">17</div>
            <div class="seat">18</div>
        </div>
        <div class="choose-seat-container">
            <div class="seat">19</div>
            <div class="seat">20</div>
            <div class="seat">21</div>
            <div class="seat">22</div>
            <div class="seat">23</div>
            <div class="seat">24</div>
        </div>
        <div class="choose-seat-container">
            <div class="seat">25</div>
            <div class="seat">26</div>
            <div class="seat">27</div>
            <div class="seat">28</div>
            <div class="seat">29</div>
            <div class="seat">30</div>
         </div>
         <div class="email-container">
         <p class="name-email-details">3.Skriv in era detaljer</p>
         <input type="text "class="name-input" name="name" placeholder="Namn">
         <input type="email "class="email-input" name="email" placeholder="skriv mailadress">
         <input type="email "class="confirm-email-input" name="confirmEmail" placeholder="bekräfta mailadress">
         </div>
        <div class="buy-button-container">
            <button>Köp biljetter</button>
        </div>
    `;
  bookingRenderContainer.appendChild(bookingInfoContainer);
};

// This should be triggered from an event when you click "biljetter" in the info about movie page.
saveBookingInfo();
