const slides = document.querySelectorAll('.slide');
const firstSlide = slides[0];
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
    const slideContent = slides[currentSlide - 1].children[0];
    const h2 = slideContent.children[0];
    const h3 = slideContent.children[1];
    const btn = slideContent.children[2];
    
    setTimeout(() => {
        if 
        (
            h2.classList.contains('header-anim') || 
            h3.classList.contains('header-anim') ||
            btn.classList.contains('btn-anim')
        ) 
        {
            h2.classList.remove('header-anim')
            h3.classList.remove('header-anim')
            btn.classList.remove('btn-anim')
        }
        
        h2.classList.add('header-anim')
        h3.classList.add('header-anim')
        btn.classList.add('btn-anim')

        setTimeout(() => {
            h2.classList.remove('header-anim')
            h3.classList.remove('header-anim')
            btn.classList.remove('btn-anim')
        }, 1000)
    }, secs)
}
