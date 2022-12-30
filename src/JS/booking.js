const bookingRenderContainer = document.querySelector('#booking-render-container');

const saveBookingInfo = () => { 
    
    //placeholders for variables
    let salon = 'A'; //e.target.dataset.salon
    let title = 'Terminator'; //e.target.datset.title
    let time = '2022-12-29 kl. 20.00'; //e.target.datset.time

    renderBooking(salon, title, time);  
}

const renderBooking = (salon, title, time) => {
    let bookingInfoContainer = document.createElement('div');
    bookingInfoContainer.innerHTML = `
        <h2>salong ${salon}</h2>
        <h1>${title}</h1>
        <h3>${time}</h3>
        <h2>1. Välj stolar</h2>
        <div class="choose-seat-container">
            <div class="seat">1</div>
            <div class="seat">2</div>
            <div class="seat">3</div>
            <div class="seat">4</div>
            <div class="seat">5</div>
            <div class="seat">6</div>
            <div class="seat">7</div>
        </div>
        <div class="buy-button-container">
    <button>Köp biljetter</button>
</div>
    `;   
    bookingRenderContainer.appendChild(bookingInfoContainer);
}

// This should be triggered from an event when you click "biljetter" in the info about movie page.
saveBookingInfo();