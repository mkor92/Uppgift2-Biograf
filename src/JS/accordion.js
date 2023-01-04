const firstSlide = document.querySelector('#first-slide');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let interval;
let margin = 0;
let slideCount = slides.length;
let currentSlide = 1;

next.addEventListener('click', () => {
    clearInterval(interval);
    if(currentSlide >= slideCount) {
        margin = 0;
        currentSlide = 1;
        anim(500);
    } else {
        margin -= 100; 
        currentSlide++;
        anim(100)
    }
    firstSlide.style.marginLeft = `${margin}%`;
    startInterval();
});

prev.addEventListener('click', () => {
    clearInterval(interval);
    if(currentSlide <= 1) {
        currentSlide = slideCount;
        margin = -100 * (slideCount - 1);
        anim(500);
    } else {
        currentSlide--;
        margin += 100;
        anim(100);
    }
    firstSlide.style.marginLeft = `${margin}%`;
    startInterval();
});



function startInterval() {
    interval = setInterval(() => {
        if(currentSlide >= slideCount) {
            margin = 0;
            currentSlide = 1;
            anim(500);
        } else {
            margin -= 100; 
            currentSlide++;
            anim(150);
        }
        firstSlide.style.marginLeft = `${margin}%`;
    }, 7000);
}

startInterval();

function anim(secs){
    setTimeout(()=> {
        const slideContent = slides[currentSlide - 1].children[0];
        slideContent.children[0].classList.add('header-anim')
        slideContent.children[1].classList.add('header-anim')
        slideContent.children[2].classList.add('btn-anim')

        setTimeout(()=>{
            const slideContent = slides[currentSlide - 1].children[0];
            slideContent.children[0].classList.remove('header-anim')
            slideContent.children[1].classList.remove('header-anim')
            slideContent.children[2].classList.remove('btn-anim')
        }, 1000)
    }, secs)
}