export function booking() {

const bookingRenderContainer = document.querySelector('#booking-render-container');

const saveBookingInfo = () => { 
    
    //placeholders for variables
    let salon = 'A'; //e.target.dataset.salon
    let title = 'Terminator'; //e.target.datset.title
    let time = '2022-12-29 kl. 20.00'; //e.target.datset.time

    renderBookingSalonTitleDate(salon, title, time);  
}

const renderBookingSalonTitleDate = (salon, title, time) => {
    let bookingInfoContainer = document.createElement('div');
    bookingInfoContainer.innerHTML = `
        <h2>salong ${salon}</h2>
        <h1>${title}</h1>
        <h3>${time}</h3>
    `;
    
    //bookingRenderContainer.appendChild(bookingInfoContainer);
}

// This should be triggered from an event when you click "biljetter" in the info about movie page.
saveBookingInfo();
}