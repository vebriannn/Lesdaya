const idHeader = document.querySelector('header');
const titleHero = document.querySelector('.title-hero')
const subtitleHero = document.querySelector('.subtitle-hero')


// navbar sticky
window.addEventListener('scroll', () => {
    
    // navbar sticky
    if(window.scrollY > 1) {
        idHeader.classList.add("scrol-actived");
    }
    else {
        idHeader.classList.remove("scrol-actived");
    }

    // parallax hero section
    titleHero.style.marginTop = window.scrollY * 2.5 + 'px'



})






